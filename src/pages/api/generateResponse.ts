//import { ollama, generateText } from "modelfusion";
//
//export const config = {
//  runtime: "edge",
//};
//
//const MAX_RETRIES = 5;
//
//async function generateResponseWithRetry(retries: number, prompt: string) {
//  try {
//    const text = await generateText({
//      model: ollama
//        .CompletionTextGenerator({
//          model: "moondream",
//          temperature: 0.2,
//          maxGenerationTokens: 120,
//        })
//        .withTextPrompt(),
//
//      prompt: prompt,
//    });
//
//    return text;
//  } catch (error) {
//    if (
//      error.data &&
//      error.data.error ===
//      "unexpected server status: llm server loading model" &&
//      retries > 0
//    ) {
//      await new Promise((resolve) => setTimeout(resolve, 2000));
//      return generateResponseWithRetry(retries - 1, prompt);
//    }
//
//    throw error;
//  }
//}
//
//export default async function handler(req) {
//  const { prompt } = await req.json();
//
//  if (!prompt || typeof prompt !== "string") {
//    return new Response("Invalid prompt", { status: 400 });
//  }
//
//  const encoder = new TextEncoder();
//  const stream = new ReadableStream({
//    async start(controller) {
//      try {
//        const text = await generateResponseWithRetry(MAX_RETRIES, prompt);
//
//        for (const chunk of text) {
//          controller.enqueue(encoder.encode(chunk));
//        }
//
//        controller.close();
//      } catch (error) {
//        console.error("Error while generating response: ", error);
//        controller.error(error);
//      }
//    },
//  });
//
//  return new Response(stream, {
//    headers: { "Content-Type": "text/plain; charset=utf-8" },
//  });
//}
