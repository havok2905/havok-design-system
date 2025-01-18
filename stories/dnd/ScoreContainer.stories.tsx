import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ScoreContainer } from '../../components/dnd';

const meta: Meta<typeof ScoreContainer> = {
  argTypes: {
    label: { control: 'text' },
    mod: { control: 'number' },
    score: { control: 'number' }
  },
  args: {
    label: 'Intelligence',
    mod: 5,
    score: 20
  },
  component: ScoreContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DND/ScoreContainer'
};

export default meta;

export const Default: StoryObj<typeof ScoreContainer> = {};
