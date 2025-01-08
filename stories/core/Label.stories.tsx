import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../components/core';

const meta: Meta<typeof Label> = {
  argTypes: {
    htmlFor: {
      control: 'text'
    },
    isError: {
      control: 'boolean'
    },
    text: {
      control: 'text'
    }
  },
  args: {
    text: 'Test Label',
    htmlFor: 'test-label'
  },
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Label'
};

export default meta;

export const Default: StoryObj<typeof Label> = {};

export const Error: StoryObj<typeof Label> = {
  args: {
    isError: true
  }
};
