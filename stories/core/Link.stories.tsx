import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Link } from '../../components/core';

const meta: Meta<typeof Link> = {
  argTypes: {
    to: { control: 'text' },
  },
  args: {
    children: (
      <> 
        The quick brown fox jumps over the lazy dog
      </>
    ),
    to: '#'
  },
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Link'
};

export default meta;

export const Default: StoryObj<typeof Link> = {};
