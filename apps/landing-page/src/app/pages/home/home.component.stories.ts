import type { Meta, StoryObj } from '@storybook/angular';
import { LdHome } from './home.component';

export default {
  component: LdHome,
  title: 'pages/LdHome',
  parameters: {
    layout: 'fullscreeen'
  }
} as Meta<LdHome>;

type Story = StoryObj<LdHome>;

export const Primary: Story = {
  args: {},
};
