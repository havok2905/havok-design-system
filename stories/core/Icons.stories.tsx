import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../components/core';

const meta: Meta<typeof Icon> = {
  argTypes: {
  },
  args: {
    size: 24,
    iconType: 'copy'
  },
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/Icon'
};

export default meta;

export const Close: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'close'
  }
};


export const Copy: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'copy'
  }
};

export const Delete: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'delete'
  }
};

export const Download: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'download'
  }
};

export const Edit: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'edit'
  }
};

export const Mail: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'mail'
  }
};

export const Menu: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'menu'
  }
};

export const Save: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'save'
  }
};

export const Upload: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'upload'
  }
};

export const View: StoryObj<typeof Icon> = {
  args: {
    size: 24,
    iconType: 'view'
  }
};
