import type { Meta, StoryObj } from '@storybook/angular';
import { RmChatContainer } from './chat-container.component';
import { primaryMessagesMock, multipleMessagesMock } from '../@mocks/chat-container-messages.mock';
import { signal } from '@angular/core';

export default {
  component: RmChatContainer,
  title: 'chat/RmChatContainer',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    } 
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
    messages: signal(primaryMessagesMock),
  },
};

export const MultipleMessages: Story = {
  args: {
    userInfo: {
      name: 'Mateo',
      title: 'Entrenador personal',
      avatar: 'mateo-profile-pic.png',
    },
    messages: signal(multipleMessagesMock),
  }, 
}; 
