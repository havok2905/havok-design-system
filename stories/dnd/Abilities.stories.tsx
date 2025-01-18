import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Abilities } from '../../components/dnd';

const meta: Meta<typeof Abilities> = {
  argTypes: {
  },
  args: {
    abilities: {
      strength: {
        ability: {
          label: 'Strength',
          mod: -1,
          score: 8
        },
        isSaveProficient: false,
        saveMod: -1,
        skills: [
          {
            label: 'Athletics',
            mod: -1,
            proficiency: 'none'
          }
        ]
      },
      dexterity: {
        ability: {
          label: 'Dexterity',
          mod: 2,
          score: 14
        },
        isSaveProficient: false,
        saveMod: 2,
        skills: [
          {
            label: 'Acrobatics',
            mod: 4,
            proficiency: 'proficient'
          },
          {
            label: 'Sleight of Hand',
            mod: 2,
            proficiency: 'none'
          },
          {
            label: 'Stealth',
            mod: 4,
            proficiency: 'proficient'
          }
        ]
      },
      constitution: {
        ability: {
          label: 'Constitution',
          mod: 0,
          score: 10
        },
        isSaveProficient: false,
        saveMod: 0,
        skills: []
      },
      intelligence: {
        ability: {
          label: 'Intelligence',
          mod: 4,
          score: 18
        },
        isSaveProficient: true,
        saveMod: 6,
        skills: [
          {
            label: 'Arcana',
            mod: 6,
            proficiency: 'proficient'
          },
          {
            label: 'History',
            mod: 4,
            proficiency: 'none'
          },
          {
            label: 'Investigation',
            mod: 8,
            proficiency: 'expertise'
          },
          {
            label: 'Nature',
            mod: 4,
            proficiency: 'none'
          },
          {
            label: 'Religion',
            mod: 4,
            proficiency: 'none'
          }
        ]
      },
      wisdom: {
        ability: {
          label: 'Wisdom',
          mod: 1,
          score: 13
        },
        isSaveProficient: true,
        saveMod: 3,
        skills: [
          {
            label: 'Animal Handling',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Insight',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Medicine',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Perception',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Survival',
            mod: 1,
            proficiency: 'none'
          }
        ]
      },
      charisma: {
        ability: {
          label: 'Charisma',
          mod: 1,
          score: 12
        },
        isSaveProficient: false,
        saveMod: 1,
        skills: [
          {
            label: 'Deception',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Intimidation',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Performance',
            mod: 1,
            proficiency: 'none'
          },
          {
            label: 'Persuasion',
            mod: 1,
            proficiency: 'none'
          }
        ]
      }
    }
  },
  component: Abilities,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DND/Abilities'
};

export default meta;

export const Default: StoryObj<typeof Abilities> = {};
