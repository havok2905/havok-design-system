import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, Text } from '../../components/core';

const meta: Meta<typeof Box> = {
  argTypes: {
  },
  args: {
    children: (
      <Text>Hello, world!</Text>
    )
  },
  component: Box,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Box'
};

export default meta;

export const Default: StoryObj<typeof Box> = {};
