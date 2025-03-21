import type { Meta, StoryObj } from '@storybook/angular';
import { RmIntensity } from './intensity.component';

export default {
  component: RmIntensity,
  title: 'components/feedback/RmIntensity',
} as Meta<RmIntensity>;

type Story = StoryObj<RmIntensity>;

export const Primary: Story = {
  args: {
    intensity: 'high'
  },
  render: () => ({
    template: `
      <p>rest:</p>
      <rm-intensity intensity="rest"/>
      <p>low:</p>
      <rm-intensity intensity="low"/>
      <p>medium:</p>
      <rm-intensity intensity="medium"/>
      <p>high:</p>
      <rm-intensity intensity="high"/>
    `
  })
};
