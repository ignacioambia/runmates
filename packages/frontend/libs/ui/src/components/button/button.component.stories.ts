import type { Meta, StoryObj } from '@storybook/angular';
import { RmButton } from './button.component';

export default {
  component: RmButton,
  title: 'components/RmButton',
} as Meta<RmButton>;

type Story = StoryObj<RmButton>;

export const Primary: Story = {
  args: {},
  render: () => ({
    template: '<button rm-button>Click me</button>'
  })
};

export const Disabled: Story = {
  args: {},
  render: () => ({
    template: '<button rm-button [disabled]="true">Click me</button>'
  })
};

export const Loading: Story = {
  args: {},
  render: () => ({
    template: '<button rm-button [loading]="true">Click me</button>'
  })
};

export const FullWidth: Story = {
  args: {},
  render: () => ({
    template: '<button rm-button style="width: 100%">Click me</button>'
  })
};