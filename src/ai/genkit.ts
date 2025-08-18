import { z } from "zod";
import { defineFlow } from "@genkit-ai/flow";

// Define schemas
const inputSchema = z.object({
  message: z.string(),
});

const outputSchema = z.object({
  response: z.string(),
});

// Export chatbot flow using defineFlow
export const chatbotFlow = defineFlow(
  {
    name: "chatbotFlow",
    inputSchema,
    outputSchema,
  },
  async (input) => {
    return {
      response: `You said: ${input.message}`,
    };
  }
);
