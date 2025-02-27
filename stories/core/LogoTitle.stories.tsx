import type { Meta, StoryObj } from '@storybook/react';

import { LogoTitle } from '../../components/core';

const meta: Meta<typeof LogoTitle> = {
  argTypes: {
    content: { control: 'text' }
  },
  args: {
    content: 'Hello, world!'
  },
  component: LogoTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/core/LogoTitle'
};

export default meta;

export const Default: StoryObj<typeof LogoTitle> = {};
