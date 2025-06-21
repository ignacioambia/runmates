import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RmMessage } from './message.component';
import { RmTrainingCard } from '../training-card/training-card.component';
import { trainingWithTwoSessions } from '../training-card/@mocks/trainings.mock';

const defaultArgs = {
  avatar: 'https://picsum.photos/200/300'
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
    props: {...args, training: trainingWithTwoSessions},
    template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
    <rm-message ${argsToTemplate(args)} role="assistant">
      <rm-training-card [training]="training"/>
      <div>
      Mid-week strength training to keep the muscle groups engaged. Focus on legs and core to support your running mechanics.
      </div>
    </rm-message>
    <rm-message role="user" ${argsToTemplate(args)}>Mid-week strength training to keep the muscle groups engaged. Focus on legs and core to support your running mechanics.</rm-message>
    <rm-message role="assistant" ${argsToTemplate(args)}>Estoy para ayudarte</rm-message>
    <rm-message role="user" ${argsToTemplate(args)}>Gracias</rm-message>
    </div>

    `
  })
};

export const Assistant: Story = {
  args: defaultArgs,
  render: (args) => ({
    props: args,
    template: `<rm-message role="assistant" ${argsToTemplate(args)}>
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
    template: `<rm-message role="assistant" ${argsToTemplate(args)}> 
    <rm-training-card [training]="trainingCard"/> 
    <div style="margin-top: 1rem;">
    ¡Hey! Soy Mateo, tu entrenador personal en Runmates. 
    🏃‍♂️ Estoy aquí para asegurarme de que des lo mejor en cada carrera. ¿Listo para empezar? 
    ¿Cuántos kilómetros te gustaría entrenar? Selecciona alguna de estas opciones:</div></rm-message>`
  })
};
