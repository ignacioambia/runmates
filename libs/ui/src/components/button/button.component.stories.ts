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
    template: '<button rm-button variant="primary">Click me</button>'
  })
};

export const Outline: Story = {
  args: {},
  render: () => ({
    template: '<button rm-button variant="outline">Click me</button>'
  })
};

export const Disabled: Story = {
  args: {},
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <button rm-button variant="primary" [disabled]="true">Primary Disabled</button>
        <button rm-button variant="outline" [disabled]="true">Outline Disabled</button>
      </div>
    `
  })
};

export const Loading: Story = {
  args: {},
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <button rm-button variant="primary" [loading]="true">Primary Loading</button>
        <button rm-button variant="outline" [loading]="true">Outline Loading</button>
      </div>
    `
  })
};

export const FullWidth: Story = {
  args: {},
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <button rm-button variant="primary" style="width: 100%">Primary Full Width</button>
        <button rm-button variant="outline" style="width: 100%">Outline Full Width</button>
      </div>
    `
  })
};

export const AllVariants: Story = {
  args: {},
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <button rm-button variant="primary">Primary</button>
        <button rm-button variant="outline">Outline</button>
        <button rm-button variant="primary" [disabled]="true">Primary Disabled</button>
        <button rm-button variant="outline" [disabled]="true">Outline Disabled</button>
        <button rm-button variant="primary" [loading]="true">Primary Loading</button>
        <button rm-button variant="outline" [loading]="true">Outline Loading</button>
      </div>
    `
  })
};