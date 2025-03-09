import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RmMessage } from './message.component';
import { RmTrainingCard } from '../training-card/training-card.component';
import { trainingWithTwoSessions } from '../training-card/@mocks/trainings.mock';
import { User } from '@runmates/types';

const defaultArgs: { user: User } = {
  user: {
  name: 'Mateo',
  profilePicUrl: 'https://picsum.photos/200/300'
  }
}

export default {
  component: RmMessage,
  title: 'components/RmMessage',
  decorators: [
    moduleMetadata({
      imports: [RmTrainingCard]
    }),
  ],
} as Meta<RmMessage>;

type Story = StoryObj<RmMessage>;

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => ({
    props: args,
    template: `<rm-message ${argsToTemplate(args)}>Hola mundo!</rm-message>`
  })
};

export const LargeMessage: Story = {
  args: defaultArgs,
  render: (args) => ({
    props: args,
    template: `<rm-message ${argsToTemplate(args)}>
    ¡Hey! Soy Mateo, tu entrenador personal en Runmates. 🏃‍♂️
    Estoy aquí para asegurarme de que des lo mejor en cada carrera.
    ¿Listo para empezar? ¿Cuántos kilómetros te gustaría entrenar? 
    Selecciona alguna de estas opciones:</rm-message>`
  })
};
export const Dynamic: Story = {
  args: defaultArgs,
  render: (args) => ({
    props: {...args, trainingCard: trainingWithTwoSessions},
    template: `<rm-message ${argsToTemplate(args)}> 
    <rm-training-card [training]="trainingCard"/> 
    <div style="margin-top: 1rem;">
    ¡Hey! Soy Mateo, tu entrenador personal en Runmates. 
    🏃‍♂️ Estoy aquí para asegurarme de que des lo mejor en cada carrera. ¿Listo para empezar? 
    ¿Cuántos kilómetros te gustaría entrenar? Selecciona alguna de estas opciones:</div></rm-message>`
  })
};
