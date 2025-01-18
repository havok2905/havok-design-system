import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ResourceContainer } from '../../components/dnd';

const meta: Meta<typeof ResourceContainer> = {
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' }
  },
  args: {
    label: 'Hit Points',
    value: '8'
  },
  component: ResourceContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DND/ResourceContainer'
};

export default meta;

export const Default: StoryObj<typeof ResourceContainer> = {};
