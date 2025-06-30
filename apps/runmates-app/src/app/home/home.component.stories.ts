import type { Meta, StoryObj } from '@storybook/angular';
import { AppHome } from './home.component';
import { http, HttpResponse } from 'msw';

export default {
  component: AppHome,
  title: 'app/AppHome',
} as Meta<AppHome>;

type Story = StoryObj<AppHome>;

export const Primary: Story = {
  parameters: {
    msw: {
      handlers: [http.get('*/training-plan/:id', () => {
        return HttpResponse.json({ message: 'Training plans fetched successfully', week_3: { '1': { id: 1, name: 'Training 1' }, '2': { id: 2, name: 'Training 2' } } });
      })]
    },
    args: {},
  }
};
