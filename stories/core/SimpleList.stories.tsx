import type { Meta, StoryObj } from '@storybook/react';

import { SimpleList } from '../../components/core';

const meta: Meta<typeof SimpleList> = {
  argTypes: {
    isBulleted: { control: 'boolean' }
  },
  args: {
    isBulleted: false,
    items: [
      {
        content: 'The quick brown fox jumps over the lazy dog'
      },
      {
        content: 'The quick brown fox jumps over the lazy dog'
      },
      {
        content: 'The quick brown fox jumps over the lazy dog'
      },
    ]
  },
  component: SimpleList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/SimpleList'
};

export default meta;

export const Default: StoryObj<typeof SimpleList> = {};

export const Bulleted: StoryObj<typeof SimpleList> = {
  args: {
    isBulleted: true
  }
};
