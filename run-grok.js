import "dotenv/config";
import { xai } from "@ai-sdk/xai";
import { streamText } from "ai";

async function run() {
  console.log("Using model: grok-2-1212");
  console.log("Prompting...");

  try {
    const result = await streamText({
      model: xai("grok-2-1212"),
      prompt: "Whats 3 + 2?",
    });

    console.log("Streaming response:");
    for await (const textPart of result.textStream) {
      process.stdout.write(textPart);
    }
  } catch (err) {
    console.error("⚠️ Error during streamText:", err);
  }
}

run();
