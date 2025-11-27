import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION, SYSTEM_INSTRUCTION_ZH } from "../constants";

let client: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return;
  }
  client = new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateTeamResponse = async (userPrompt: string, language: 'en' | 'zh' = 'en'): Promise<string> => {
  if (!client) initializeGenAI();
  if (!client) return language === 'zh' ? "系统离线。通信系统不可用。" : "System offline. Communication systems unavailable.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: language === 'zh' ? SYSTEM_INSTRUCTION_ZH : SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || (language === 'zh' ? "数据损坏。请重试传输。" : "Data corrupted. Please retry transmission.");
  } catch (error) {
    console.error("Communication error:", error);
    return language === 'zh' ? "信号丢失。请稍后再试。" : "Signal lost. Please try again later.";
  }
};