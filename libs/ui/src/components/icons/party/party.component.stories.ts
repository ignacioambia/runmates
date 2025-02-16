import type { Meta, StoryObj } from '@storybook/angular';
import { RmPartyIcon } from './party.component';

export default {
  component: RmPartyIcon,
  title: 'components/icons/RmParty',
} as Meta<RmPartyIcon>;

type Story = StoryObj<RmPartyIcon>;

export const Primary: Story = {
  args: {},
};
