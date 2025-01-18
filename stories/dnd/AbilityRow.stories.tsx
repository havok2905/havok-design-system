import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AbilityRow } from '../../components/dnd';

const meta: Meta<typeof AbilityRow> = {
  argTypes: {
  },
  args: {
    ability: {
      label: 'Intelligence',
      mod: 5,
      score: 20
    },
    isSaveProficient: true,
    saveMod: 7,
    skills: [
      {
        label: 'Arcana',
        mod: 7,
        proficiency: 'proficient'
      },
      {
        label: 'History',
        mod: 5,
        proficiency: 'none'
      },
      {
        label: 'Investigation',
        mod: 9,
        proficiency: 'expertise'
      },
      {
        label: 'Nature',
        mod: 5,
        proficiency: 'none'
      },
      {
        label: 'Religion',
        mod: 5,
        proficiency: 'none'
      }
    ]
  },
  component: AbilityRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DND/AbilityRow'
};

export default meta;

export const Default: StoryObj<typeof AbilityRow> = {};
