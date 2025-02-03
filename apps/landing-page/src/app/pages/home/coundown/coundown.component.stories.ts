import type { Meta, StoryObj } from '@storybook/angular';
import { LdCoundown } from './coundown.component';

export default {
  component: LdCoundown,
  title: 'app/pages/home/LdCoundown',
} as Meta<LdCoundown>;

type Story = StoryObj<LdCoundown>;

export const Primary: Story = {
  args: {},
};
