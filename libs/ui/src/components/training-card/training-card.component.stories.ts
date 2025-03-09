import { trainingWithThreeSeesions } from './@mocks/trainings';
import {
  argsToTemplate,
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RmTrainingCard } from './training-card.component';

export default {
  component: RmTrainingCard,
  title: 'components/RmTrainingCard',
  decorators: [
  ],
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
  render: (args) => ({
    props: args,
    template: `
    <div style="width: 170px;">
      <rm-training-card ${argsToTemplate(args)}/>
    </div>
    `,
  }),
};

export const Double: Story = {
  args: {
    training: {
      activities: [
        {
          title: 'Easy Run',
          distance: 5,
        },
        {
          title: 'Strides',
          complementary_training: '4X20s',
        },
      ],
      intensity: 'medium',
      notes:
        'Run easy but end with high-effort strides to build speed and agility. Perform four 20-second strides at near max effort. Keep a comfortable pace throughout your run.',
      weekday: 'Wednesday',
    },
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="width: 352px;">
      <rm-training-card ${argsToTemplate(args)}/>
    </div>
    `,
  }),
};

export const Triple: Story = {
  args: {
    training: trainingWithThreeSeesions,
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="width: 352px;">
      <rm-training-card ${argsToTemplate(args)}/>
    </div>
    `,
  }),
};
