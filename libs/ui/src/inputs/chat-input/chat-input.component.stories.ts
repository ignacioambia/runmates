import type { Meta, StoryObj } from '@storybook/angular';
import { RmChatInput } from './chat-input.component';
import { fn } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  component: RmChatInput,
  title: 'inputs/RmChatInput',
  argTypes: {
    messageSent: {
      action: 'messageSent',
    },
  },
} as Meta<RmChatInput>;

type Story = StoryObj<RmChatInput>;

export const Empty: Story = {
  args: {
  },
};

export const Filled: Story = {
  args: {
    message: 'Hello world',
  },
  decorators: [
    (storyFunc) => {  
      const story = storyFunc();
      setTimeout(() => {
        const textarea = document.querySelector('textarea');
        textarea?.dispatchEvent(new Event('input', { bubbles: true }));
        textarea?.focus();
      });
      return story;
    }
  ]
};

export const ManyLines: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  decorators: [
    (storyFunc) => {
      const story = storyFunc();
      setTimeout(() => {
        const textarea = document.querySelector('textarea');
        textarea?.dispatchEvent(new Event('input', { bubbles: true }));
        textarea?.focus();
      });
      return story;
    },
  ],
};
