import type { Meta, StoryObj } from '@storybook/angular';
import { RmSend } from './send.component';

export default {
  component: RmSend,
  title: 'icons/RmSend',
} as Meta<RmSend>;

type Story = StoryObj<RmSend>;

export const Primary: Story = {
  args: {},
};
