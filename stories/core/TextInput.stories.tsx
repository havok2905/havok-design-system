import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '../../components/core';

const meta: Meta<typeof TextInput> = {
  argTypes: {
    label: {
      control: 'text'
    },
    isError: {
      control: 'boolean'
    },
    name: {
      control: 'text'
    }
  },
  args: {
   label: 'Test Label',
   name: 'test-label'
  },
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/TextInput'
};

export default meta;

export const Default: StoryObj<typeof TextInput> = {};

export const Error: StoryObj<typeof TextInput> = {
  args: {
    isError: true
  }
};
