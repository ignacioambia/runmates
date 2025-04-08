import type { Meta, StoryObj } from '@storybook/angular';
import { RmChatInput } from './chat-input.component';
import { fn } from '@storybook/test';

export default {
  component: RmChatInput,
  title: 'inputs/RmChatInput',
  args: {
    sendMessage: fn(),
  }
} as Meta<RmChatInput>;

type Story = StoryObj<RmChatInput>;

export const Primary: Story = {
  args: {
    placeholder: 'Hello world',
  }
};
