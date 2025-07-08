import type { Meta, StoryObj } from '@storybook/angular';
import { LdMarketplace } from './marketplace.component';

export default {
  component: LdMarketplace,
  title: 'app/pages/LdMarketplace',
} as Meta<LdMarketplace>;

type Story = StoryObj<LdMarketplace>;

export const Primary: Story = {
  args: {},
};
