import type { Meta, StoryObj } from '@storybook/angular';
import { RmChatContainer } from './chat-container.component';

export default {
  component: RmChatContainer,
  title: 'chat/RmChatContainer',
} as Meta<RmChatContainer>;

type Story = StoryObj<RmChatContainer>;

export const Primary: Story = {
  args: {},
};
