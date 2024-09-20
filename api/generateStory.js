import { NextResponse } from "next/server";
import { ollama, generateText } from "modelfusion";

export async function GET() {
  try {
    const text = await generateText({
      model: ollama
        .CompletionTextGenerator({
          model: "mistral:text",
          temperature: 0.2,
          maxGenerationTokens: 120,
        })
        .withTextPrompt(),

      prompt: "Write a short story about a robot learning to love:\n\n",
    });

    return NextResponse.json({ story: text });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate story" },
      { status: 500 },
    );
  }
}
