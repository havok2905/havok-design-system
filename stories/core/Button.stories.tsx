import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/core';

const meta: Meta<typeof Button> = {
  argTypes: {
    buttonType: { control: 'radio', options: [
      'destructive',
      'primary',
      'secondary'
    ]},
    text: { control: 'text' }
  },
  args: {
    buttonType: 'primary',
    text: 'Hello, world!'
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Button'
};

export default meta;

export const Destructive: StoryObj<typeof Button> = {
  args: {
    buttonType: 'destructive',
    text: 'Hello, world!'
  }
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    buttonType: 'primary',
    text: 'Hello, world!'
  }
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    buttonType: 'secondary',
    text: 'Hello, world!'
  }
};
