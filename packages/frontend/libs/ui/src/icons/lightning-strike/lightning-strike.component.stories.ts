import type { Meta, StoryObj } from '@storybook/angular';
import { RmLightningStrike } from './lightning-strike.component';

export default {
  component: RmLightningStrike,
  title: 'icons/RmLightningStrike',
} as Meta<RmLightningStrike>;

type Story = StoryObj<RmLightningStrike>;

export const Primary: Story = {
  args: {},
};
