import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { RmTrainingCard } from './training-card.component';

export default {
  component: RmTrainingCard,
  title: 'components/RmTrainingCard',
  decorators: [
    componentWrapperDecorator((story) => `<div style="width: 170px;">${story}</div>`)
  ]
} as Meta<RmTrainingCard>;

type Story = StoryObj<RmTrainingCard>;

export const Single: Story = {
  args: {
    training: {
      activities: [
        {
          title: 'Easy Run',
          distance: 5,
        },
      ],
      notes:
        'Here we go, week 1 of your training!. Kick off your training. Remember dynamic warm up! Run at a pace between 7:11 and 7:54 per km.',
      intensity: 'low',
      weekday: 'Monday',
    },
  },
};
