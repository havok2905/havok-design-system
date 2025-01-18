import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tag } from '../../components/core';

const meta: Meta<typeof Tag> = {
  argTypes: {
    keyString: { control: 'text' },
    value: { control: 'text' }
  },
  args: {
    keyString: 'foo',
    value: 'bar'
  },
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Tag'
};

export default meta;

export const Default: StoryObj<typeof Tag> = {};
