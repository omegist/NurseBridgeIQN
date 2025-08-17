/**
 * @fileoverview This file initializes the Genkit AI object and configures it
 * with the necessary plugins for the application. This centralized AI
 * instance is then exported for use in other parts of the application, such
 * as in AI flows.
 */

import { genkit } from 'genkit';
import { firebase } from '@genkit-ai/firebase';
import { googleAI } from '@genkit-ai/googleai';
import { next } from '@genkit-ai/next';

/**
 * The `ai` object is the central point of interaction with the Genkit
 * framework. It is configured here with plugins for Firebase integration,
 * Google AI models, and Next.js support.
 *
 * This configuration enables features like flow state management with
 * Firestore, access to Google's generative models (e.g., Gemini), and seamless
 * integration with Next.js server actions and API routes.
 *
 * The `enableTracingAndMetrics` flag is set to true to allow for monitoring
 * and debugging of AI flows in the Genkit developer UI.
 */
export const ai = genkit({
  plugins: [firebase, googleAI(), next],
  enableTracingAndMetrics: true,
});
