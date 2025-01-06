import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  argTypes: {
  },
  args: {
  },
  component: Page,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/Page'
};

export default meta;

export const Default: StoryObj<typeof Page> = {};