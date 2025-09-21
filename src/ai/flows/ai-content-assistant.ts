'use server';

/**
 * @fileOverview An AI-powered content assistant for refining portfolio text.
 *
 * - refinePortfolioText - A function that refines portfolio text using AI.
 * - RefinePortfolioTextInput - The input type for the refinePortfolioText function.
 * - RefinePortfolioTextOutput - The return type for the refinePortfolioText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const RefinePortfolioTextInputSchema = z.object({
  text: z
    .string()
    .describe('The text to refine, such as a bio, skill summary, or project highlight.'),
});
export type RefinePortfolioTextInput = z.infer<typeof RefinePortfolioTextInputSchema>;

const RefinePortfolioTextOutputSchema = z.object({
  refinedText: z
    .string()
    .describe('The refined text, presented in a professional and consistent tone.'),
});
export type RefinePortfolioTextOutput = z.infer<typeof RefinePortfolioTextOutputSchema>;

export async function refinePortfolioText(input: RefinePortfolioTextInput): Promise<RefinePortfolioTextOutput> {
  return refinePortfolioTextFlow(input);
}

const refinePortfolioTextPrompt = ai.definePrompt({
  name: 'refinePortfolioTextPrompt',
  input: {schema: RefinePortfolioTextInputSchema},
  output: {schema: RefinePortfolioTextOutputSchema},
  prompt: `Refine the following text to be professional and consistent in tone:

{{{text}}}`,
});

const refinePortfolioTextFlow = ai.defineFlow(
  {
    name: 'refinePortfolioTextFlow',
    inputSchema: RefinePortfolioTextInputSchema,
    outputSchema: RefinePortfolioTextOutputSchema,
  },
  async input => {
    const {output} = await refinePortfolioTextPrompt(input);
    return output!;
  }
);
