import type { Meta, StoryObj } from '@storybook/angular';
import { RmChatContainer } from './chat-container.component';

export default {
  component: RmChatContainer,
  title: 'chat/RmChatContainer',
  parameters: {
    layout: 'fullscreen', 
   }
  } as Meta<RmChatContainer>;

type Story = StoryObj<RmChatContainer>;

export const Primary: Story = {
  args: {
    userInfo: {
      name: 'Mateo',
      title: 'Entrenador personal',
      avatar: 'mateo-profile-pic.png',
    },
    messages: [
      {
        type: 'received',
        content: 'Hello, how can I help you?',
      },
      {
        type: 'sent',
        content: 'I have a question about my training plan.',
      },
    ],
  },
};
