import type { Meta, StoryObj } from '@storybook/angular';
import { RmLoaderDots } from './loader-dots.component';

export default {
  component: RmLoaderDots,
  title: 'components/loaders/RmLoaderDots',
} as Meta<RmLoaderDots>;

type Story = StoryObj<RmLoaderDots>;

export const Primary: Story = {
  args: {},
};
