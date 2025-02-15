import type { Meta, StoryObj } from '@storybook/angular';
import { AppHome } from './home.component';

export default {
  component: AppHome,
  title: 'app/AppHome',
} as Meta<AppHome>;

type Story = StoryObj<AppHome>;

export const Primary: Story = {
  args: {},
};
