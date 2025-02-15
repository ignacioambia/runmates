import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
 base: 'dark',
 brandTitle: 'UI elements',
});
addons.setConfig({ theme });