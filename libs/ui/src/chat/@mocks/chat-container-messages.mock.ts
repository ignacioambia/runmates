import { ChatMessage } from "@runmates/types/chats";

export const primaryMessagesMock: ChatMessage[] = [
 {
   threadId: '12345',
   role: 'assistant',
   content: 'Hello, how can I help you?',
 },
 {
   threadId: '12345',
   role: 'user',
   content: 'I have a question about my training plan.',
 },
];

export const multipleMessagesMock: ChatMessage[] = [
  {
    threadId: '12345',
    role: 'assistant',
    content:
      "Hello! I'm Mateo, your personal running coach. I'm here to help you improve your running performance, provide personalized training advice, and keep you motivated.\n\nLet's start! What's your name?",
  },
  { 
    threadId: '12345',
    role: 'user',
    content: "Hi Mateo! I'm Ignacio! Nice to meet you!" },
  {
    threadId: '12345',
    content: 'Nice to meet you, Ignacio! What motivates you to run?',
    role: 'assistant',
  },
  {
    threadId: '12345',
    role: 'user',
    content: 'I like running for therapeutic purposes, it makes me happy',
  },
  {
    threadId: '12345',
    content:
      "That's great to hear, Ignacio! Running is an excellent way to boost your mood and mental well-being.\n\nHow often do you typically go for a run?",
    role: 'assistant',
  },
  { 
    threadId: '12345',
    role: 'user', 
    content: '3 to 5 times a week' 
  },
  {
    threadId: '12345',
    content:
      "Perfect! Do you have any specific running goals you'd like to achieve, such as improving your pace, increasing your distance, or preparing for a race?",
    role: 'assistant',
  },
  { 
    threadId: '12345',
    role: 'user', 
    content: 'Im preparing for the mexico city half marathon!' 
  },
  {
    threadId: '12345',
    content:
      "That sounds exciting, Ignacio!\n\nHow long have you been preparing for it, and what's your current weekly mileage? Also, have you set a specific time goal for the half marathon?",
    role: 'assistant',
  },
  { 
    threadId: '12345',
    role: 'user', 
    content: 'in km a average around 15 km a week' 
  },
  {
    threadId: '12345',
    content:
      "Thanks for letting me know, Ignacio!\n\nTo prepare for the Mexico City Half Marathon, we'll gradually increase your weekly mileage to build your endurance. It's important to do this safely to prevent injuries.\n\nHere's a basic outline to get you started:\n\n1. **Base Building**: Aim to run 3-4 times a week, with a mix of easy runs and one longer run on the weekend. Gradually increase your weekly mileage by no more than 10% each week.\n\n2. **Long Runs**: Your weekend long run should be at a comfortable, conversational pace. Gradually increase the distance of this run, peaking at around 18-20 km before tapering down as the race approaches.\n\n3. **Speed Work**: Incorporate one speed workout per week to improve your pace. This could be intervals, tempo runs, or hill repeats.\n\n4. **Rest and Recovery**: Make sure to take at least one rest day per week, and consider cross-training activities like cycling or swimming on other days to complement your running.",
    role: 'assistant',
  },
];
