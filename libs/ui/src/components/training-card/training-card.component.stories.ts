import { trainingWithOneSession, trainingWithTwoSessions, trainingWithThreeSessions } from './@mocks/trainings.mock';
import {
  argsToTemplate,
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
    training: trainingWithOneSession,
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
    training: trainingWithTwoSessions
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
    training: trainingWithThreeSessions,
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
