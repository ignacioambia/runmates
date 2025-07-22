
export type ChatAction = 'signup' | 'explainPlan';
export interface ChatMessage {
  action?: ChatAction;
  chatId: number;
  role: 'user' | 'assistant';
  content: string;
}