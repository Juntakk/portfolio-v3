import "dotenv/config";
import { xai } from "@ai-sdk/xai";
import { streamText } from "ai";

async function run() {
  console.log("Using model: grok-2-1212");
  console.log("Prompting...");

  try {
    const result = await streamText({
      model: xai("grok-2-1212"),
      prompt: `
    You are a helpful assistant that knows about Nick, a senior web developer.
    Nick has 8+ years of experience, is based in Canada, and specializes in Next.js and Terraform.
    Answer the following question accordingly:

    Question: What technologies does Nick work with?
  `,
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
