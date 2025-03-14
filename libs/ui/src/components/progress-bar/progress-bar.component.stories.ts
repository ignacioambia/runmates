import type { Meta, StoryObj } from '@storybook/angular';
import { RmProgressBar } from './progress-bar.component';

export default {
  component: RmProgressBar,
  title: 'components/RmProgressBar',
} as Meta<RmProgressBar>;

type Story = StoryObj<RmProgressBar>;

export const Primary: Story = {
  args: {
    progress: 12
  },
};
