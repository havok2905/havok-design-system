import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../../components/core';

const meta: Meta<typeof IconButton> = {
  argTypes: {
    iconType: { control: 'select', options: [
      'close',
      'copy',
      'delete',
      'download',
      'edit',
      'mail',
      'menu',
      'save',
      'upload',
      'view'
    ]},
    titleText: { control: 'text' }
  },
  args: {
    iconType: 'copy',
    titleText: 'Hello, world!'
  },
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/IconButton'
};

export default meta;

export const Default: StoryObj<typeof IconButton> = {
};
