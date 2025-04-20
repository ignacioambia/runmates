
export type ChatAction = 'signup' | 'explainPlan';
export interface ChatMessage {
  action?: ChatAction;
  type: 'user' | 'assistant';
  content: string;
}