import type { Meta, StoryObj } from '@storybook/angular';
import { AppSignup } from './signup.component';

export default {
  component: AppSignup,
  title: 'app/AppSignup',
} as Meta<AppSignup>;

type Story = StoryObj<AppSignup>;

export const Primary: Story = {
  args: {},
};
