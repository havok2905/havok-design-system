import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../../components/core';

const meta: Meta<typeof Header> = {
  argTypes: {
    
  },
  args: {
    headerTitle: {
      text: 'Hello, world!',
      to: '#'
    },
    menu: {
      items: [
        {
          label: 'Home',
          to: '#'
        },
        {
          label: 'About',
          to: '#'
        },
        {
          label: 'Contact',
          to: '#'
        }
      ]
    }
  },
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Header'
};

export default meta;

export const Default: StoryObj<typeof Header> = {
};
