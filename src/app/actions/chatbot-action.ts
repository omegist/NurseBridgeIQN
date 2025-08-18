
'use server';

import { runFlow } from '@genkit-ai/flow';
import { chatbotFlow } from '@/ai/genkit';
import { z } from 'zod';

const ChatbotActionInputSchema = z.object({
    message: z.string(),
});

export async function runChatbotFlow(input: { message: string }) {
    const validatedInput = ChatbotActionInputSchema.parse(input);
    try {
        const result = await runFlow(chatbotFlow, validatedInput);
        return { success: true, response: result.response };
    } catch (error: any) {
        console.error("Error running chatbot flow:", error);
        return { success: false, message: "An error occurred in the chatbot." };
    }
}
