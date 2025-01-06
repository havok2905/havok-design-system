import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Button,
  ButtonContainer
} from '../../components/core';

const meta: Meta<typeof ButtonContainer> = {
  argTypes: {
  },
  args: {
    children: (
      <>
        <Button buttonType="primary" text="Primary"/>
        <Button buttonType="secondary" text="Secondary"/>
        <Button buttonType="destructive" text="Destructive"/>
      </>
    )
  },
  component: ButtonContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/ButtonContainer'
};

export default meta;

export const Default: StoryObj<typeof ButtonContainer> = {
  args: {
  }
};

