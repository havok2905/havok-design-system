import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Title } from '../../components/core';

const meta: Meta<typeof Title> = {
  argTypes: {
    as: { control: 'select', options: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ]},
    level: { control: 'select', options: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06'
    ]}
  },
  args: {
    children: (
      <> 
        The quick brown fox jumps over the lazy dog
      </>
    ),
    as: 'h1',
    level: '01'
  },
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Title'
};

export default meta;

export const LevelOne: StoryObj<typeof Title> = {
  args: {
    as: 'h1',
    level: '01'
  }
};

export const LevelTwo: StoryObj<typeof Title> = {
  args: {
    as: 'h2',
    level: '02'
  }
};

export const LevelThree: StoryObj<typeof Title> = {
  args: {
    as: 'h3',
    level: '03'
  }
};

export const LevelFour: StoryObj<typeof Title> = {
  args: {
    as: 'h4',
    level: '04'
  }
};

export const LevelFive: StoryObj<typeof Title> = {
  args: {
    as: 'h5',
    level: '05'
  }
};

export const LevelSix: StoryObj<typeof Title> = {
  args: {
    as: 'h6',
    level: '06'
  }
};