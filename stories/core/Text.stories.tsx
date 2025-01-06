import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from '../../components/core';

const meta: Meta<typeof Text> = {
  argTypes: {
    isBold: { control: 'boolean' },
    isItalics: { control: 'boolean' },
    isSpan: { control: 'boolean' },
    isSub: { control: 'boolean' }
  },
  args: {
    children: (
      <> 
        The quick brown fox jumps over the lazy dog
      </>
    ),
    isBold: false,
    isItalics: false,
    isSpan: false,
    isSub: false
  },
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Text'
};

export default meta;

export const Default: StoryObj<typeof Text> = { };

export const Bold: StoryObj<typeof Text> = {
  args: {
    isBold: true
  }
};

export const Italics: StoryObj<typeof Text> = {
  args: {
    isItalics: true
  }
};

export const BoldItalics: StoryObj<typeof Text> = {
  args: {
    isBold: true,
    isItalics: true
  }
};

export const Sub: StoryObj<typeof Text> = {
  args: {
    isSub: true
  }
};

export const SubBold: StoryObj<typeof Text> = {
  args: {
    isBold: true,
    isSub: true
  }
};

export const SubItalics: StoryObj<typeof Text> = {
  args: {
    isItalics: true,
    isSub: true
  }
};

export const SubBoldItalics: StoryObj<typeof Text> = {
  args: {
    isBold: true,
    isItalics: true,
    isSub: true
  }
};

export const SpanBoldItalics: StoryObj<typeof Text> = {
  args: {
    children: (
      <>
        The quick <Text isBold isItalics isSpan>brown</Text> fox jumps over the lazy dog
      </>
    )
  }
};
