import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing. AI features will not work.");
      // We can return null or throw, but for now let's throw to be caught by the caller
      throw new Error("Gemini API Key is missing");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export interface EsgStrategyResponse {
  summary: string;
  pillars: {
    environmental: string;
    social: string;
    governance: string;
  };
}

/**
 * Generates a quick ESG strategy draft based on a company description.
 */
export const generateEsgStrategy = async (companyDescription: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const modelId = 'gemini-3-flash-preview';
    
    const prompt = `
      Ты — эксперт по устойчивому развитию (ESG). 
      Проанализируй описание компании и предложи краткую стратегию ESG (3 пункта: E, S, G).
      
      Описание компании: "${companyDescription}"
      
      Ответ должен быть на русском языке. 
      Формат ответа: Маркдаун текст с заголовками для E (Экология), S (Социальная ответственность), G (Управление).
      Будь краток и профессионален.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for faster response on this simple task
        temperature: 0.7,
      }
    });

    return response.text || "Не удалось сгенерировать стратегию. Попробуйте позже.";
  } catch (error) {
    console.error("Error generating ESG strategy:", error);
    return "Произошла ошибка при обращении к AI сервису. Пожалуйста, проверьте API ключ или повторите попытку позже.";
  }
};