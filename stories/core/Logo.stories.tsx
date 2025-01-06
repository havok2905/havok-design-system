import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../../components/core';

const meta: Meta<typeof Logo> = {
  argTypes: {
    displaySize: { control: 'radio', options: [
      'display',
      'content',
      'thumbnail'
    ]}
  },
  args: {
    displaySize: 'display'
  },
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Logo'
};

export default meta;

export const Display: StoryObj<typeof Logo> = {
  args: {
    displaySize: 'display'
  }
};

export const Content: StoryObj<typeof Logo> = {
  args: {
    displaySize: 'content'
  }
};

export const Thumbnail: StoryObj<typeof Logo> = {
  args: {
    displaySize: 'thumbnail'
  }
};
