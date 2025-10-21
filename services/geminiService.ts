
import { GoogleGenAI } from "@google/genai";

export async function generateMatchAnalysis(prompt: string): Promise<string> {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API key not found. Please make sure it is set in the environment variables.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `Fout bij het verbinden met de AI-service: ${error.message}`;
    }
    return "Fout bij het verbinden met de AI-service. Probeer het later opnieuw.";
  }
}
