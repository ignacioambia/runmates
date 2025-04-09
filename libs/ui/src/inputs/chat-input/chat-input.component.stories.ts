import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { RmChatInput } from './chat-input.component';
import { fn } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  component: RmChatInput,
  title: 'inputs/RmChatInput',
  parameters: {
   layout: 'fullscreen', 
  },
  argTypes: {
    messageSent: {
      action: 'messageSent',
    },
  },
  decorators:[
    componentWrapperDecorator((story) => 
      `<div style="display: flex; flex-direction: column; gap: 1rem; height: 100vh; box-sizing: border-box; padding: 0.5rem;">
      <div style="flex: 1 0 auto;">
      </div>
      <div style="">${story}</div>
    </div>`
    ),
  ]
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
