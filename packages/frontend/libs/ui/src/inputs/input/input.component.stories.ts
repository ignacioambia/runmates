import { argsToTemplate, componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RmInput } from './input.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export default {
  component: RmInput,
  title: 'inputs/RmInput',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule]
    }),
    componentWrapperDecorator((story) => `<div style="width:263px">${story}</div>`)
  ]
} as Meta<RmInput>;

type Story = StoryObj<RmInput>;

export const Primary: Story = {
  args: {
    label: 'Nombre',
  },
};

export const Active: Story = {
  args: {
    label: 'Nombre',
    active: true,
    labelUp: true,
  },
};

export const Filled: Story = {
  args: {
    label: 'Nombre',
    labelUp: true,
    value: 'Ignacio Ambía'
  },
};
export const Error: Story = {
  args: {
    label: 'Correo',
    errorMessage: 'Correo inválido',
    value: 'Any value'
  },
  render: (args) =>{
    const inputControl = new FormControl('', [Validators.email, Validators.required]);
    inputControl.markAsDirty();
    inputControl.markAllAsTouched();
    return {
      props: { ...args, inputControl },
      template: `<rm-input [formControl]="inputControl" ${argsToTemplate(args)}></rm-input>`
    }
  } 
};
