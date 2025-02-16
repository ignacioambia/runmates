import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RmDialog } from './dialog.component';
import { RM_DIALOG_PARAMS } from '../../../services';
import { RmPartyIcon } from '../../icons/party/party.component';
import { RmDialogParams } from './dialog.model';

export default {
  component: RmDialog,
  title: 'RmDialog',
  decorators: [],
} as Meta<RmDialog>;

type Story = StoryObj<RmDialog>;

const defaultDialogParams: RmDialogParams = {
  title: '¡Estás dentro!',
  content: 'Te avisaremos en cuanto la aplicación esté disponible.',
};

export const Primary: Story = {
  args: {},
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: RM_DIALOG_PARAMS,
          useValue: defaultDialogParams
        },
      ],
    }),
  ],
};

export const WithIcon: Story = {
  args: {},
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: RM_DIALOG_PARAMS,
          useValue: {...defaultDialogParams, icon: RmPartyIcon}
        },
      ],
    }),
  ],
};
