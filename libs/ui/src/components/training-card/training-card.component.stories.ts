import { TrainingDoneExample } from './@mocks/training-done-example/training-done-example.mock';
import { trainingWithOneSession, trainingWithTwoSessions, trainingWithThreeSessions } from './@mocks/trainings.mock';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { RmTrainingCard } from './training-card.component';

export default {
  component: RmTrainingCard,
  title: 'components/RmTrainingCard',
  decorators: [
    moduleMetadata({
      imports: [TrainingDoneExample]
    })
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

export const Completed: Story = {
  render: (args) => ({
    props: args,
    template: '<rm-training-done-example trainingStatus="completed"/>',
  }),
};

export const Skipped: Story = {
  render: (args) => ({
    props: args,
    template: '<rm-training-done-example trainingStatus="skipped"/>',
  }),
};
