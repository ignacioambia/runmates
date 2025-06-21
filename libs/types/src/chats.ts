
export type ChatAction = 'signup' | 'explainPlan';
export interface ChatMessage {
  action?: ChatAction;
  threadId: string;
  role: 'user' | 'assistant';
  content: string;
}