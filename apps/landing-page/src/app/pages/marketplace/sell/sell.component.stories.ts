import type { Meta, StoryObj } from '@storybook/angular';
import { LdSell } from './sell.component';

export default {
  component: LdSell,
  title: 'app/pages/marketplace/LdSell',
} as Meta<LdSell>;

type Story = StoryObj<LdSell>;

export const Primary: Story = {
  args: {},
};
