import { GoogleGenAI } from "@google/genai"

// берём ключ из Vite env
const apiKey = import.meta.env.VITE_API_KEY || null

// создаём клиент только если ключ есть
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null

export interface EsgStrategyResponse {
  summary: string
  pillars: {
    environmental: string
    social: string
    governance: string
  }
}

/**
 * Generates a quick ESG strategy draft based on a company description.
 */
export const generateEsgStrategy = async (
  companyDescription: string
): Promise<string> => {
  // если ключа нет — не падаем
  if (!ai) {
    console.warn("AI отключён — отсутствует API ключ")
    return "AI-генерация отключена. Добавьте API ключ."
  }

  try {
    const modelId = "gemini-3-flash-preview"

    const prompt = `
Ты — эксперт по устойчивому развитию (ESG). 
Проанализируй описание компании и предложи краткую стратегию ESG (3 пункта: E, S, G).

Описание компании: "${companyDescription}"

Ответ должен быть на русском языке. 
Формат ответа: Markdown текст с заголовками для E (Экология), S (Социальная ответственность), G (Управление).
Будь краток и профессионален.
`

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.7,
      },
    })

    return response.text || "Не удалось сгенерировать стратегию."
  } catch (error) {
    console.error("AI error:", error)
    return "Ошибка AI сервиса."
  }
}
