import { ollama, generateText } from "modelfusion";

export const config = {
  runtime: "edge",
};

const MAX_RETRIES = 5;

async function generateStoryWithRetry(retries) {
  try {
    const text = await generateText({
      model: ollama
        .CompletionTextGenerator({
          model: "llama3.1",
          temperature: 0.7,
          maxGenerationTokens: 120,
        })
        .withTextPrompt(),
      prompt: "Write a short story about a robot learning to love:\n\n",
    });
    return text;
  } catch (error) {
    if (
      error.data &&
      error.data.error ===
      "unexpected server status: llm server loading model" &&
      retries > 0
    ) {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
      return generateStoryWithRetry(retries - 1);
    }
    throw error; // Rethrow the error if no retries are left
  }
}

export default async function handler(req) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const text = await generateStoryWithRetry(MAX_RETRIES);

        for (const chunk of text) {
          controller.enqueue(encoder.encode(chunk));
        }

        controller.close();
      } catch (error) {
        console.error("Error while generating story: ", error);
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
