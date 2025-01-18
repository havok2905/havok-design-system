import type { Meta, StoryObj } from '@storybook/react';

import { GenericContentBlock } from '../../components/core';

const meta: Meta<typeof GenericContentBlock> = {
  argTypes: {
   
  },
  args: {
    entires: []
  },
  component: GenericContentBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Core/GenericContentBlock'
};

export default meta;

export const Default: StoryObj<typeof GenericContentBlock> = {
  args: {
    entires: [
      {
        type: 'titledentry',
        name: 'Level 1',
        level: 1,
        entries: [
          'The quick brown fox jumps over the lazy dog',
          {
            type: 'list',
            items: [
              'The quick brown fox jumps over the lazy dog',
              'The quick brown fox jumps over the lazy dog',
              'The quick brown fox jumps over the lazy dog'
            ]
          },
          {
            type: 'table',
            caption: 'Table!!!',
            columnLabels: ['A', 'B', 'C'],
            rows: [
              ['a', 'b', 'c']
            ]
          },
          {
            type: 'titledentry',
            name: 'Level 2',
            level: 2,
            entries: [
              'The quick brown fox jumps over the lazy dog',
              {
                type: 'list',
                items: [
                  'The quick brown fox jumps over the lazy dog',
                  'The quick brown fox jumps over the lazy dog',
                  'The quick brown fox jumps over the lazy dog'
                ]
              },
              {
                type: 'table',
                caption: 'Table!!!',
                columnLabels: ['A', 'B', 'C'],
                rows: [
                  ['a', 'b', 'c']
                ]
              },
              {
                type: 'titledentry',
                name: 'Level 3',
                level: 3,
                entries: [
                  'The quick brown fox jumps over the lazy dog',
                  {
                    type: 'list',
                    items: [
                      'The quick brown fox jumps over the lazy dog',
                      'The quick brown fox jumps over the lazy dog',
                      'The quick brown fox jumps over the lazy dog'
                    ]
                  },
                  {
                    type: 'table',
                    caption: 'Table!!!',
                    columnLabels: ['A', 'B', 'C'],
                    rows: [
                      ['a', 'b', 'c']
                    ]
                  },
                  {
                    type: 'titledentry',
                    name: 'Level 4',
                    level: 4,
                    entries: [
                      'The quick brown fox jumps over the lazy dog',
                      {
                        type: 'list',
                        items: [
                          'The quick brown fox jumps over the lazy dog',
                          'The quick brown fox jumps over the lazy dog',
                          'The quick brown fox jumps over the lazy dog'
                        ]
                      },
                      {
                        type: 'table',
                        caption: 'Table!!!',
                        columnLabels: ['A', 'B', 'C'],
                        rows: [
                          ['a', 'b', 'c']
                        ]
                      },
                      {
                        type: 'titledentry',
                        name: 'Level 5',
                        level: 5,
                        entries: [
                          'The quick brown fox jumps over the lazy dog',
                          {
                            type: 'list',
                            items: [
                              'The quick brown fox jumps over the lazy dog',
                              'The quick brown fox jumps over the lazy dog',
                              'The quick brown fox jumps over the lazy dog'
                            ]
                          },
                          {
                            type: 'table',
                            caption: 'Table!!!',
                            columnLabels: ['A', 'B', 'C'],
                            rows: [
                              ['a', 'b', 'c']
                            ]
                          },
                          {
                            type: 'titledentry',
                            name: 'Level 6',
                            level: 6,
                            entries: [
                              'The quick brown fox jumps over the lazy dog',
                              {
                                type: 'list',
                                items: [
                                  'The quick brown fox jumps over the lazy dog',
                                  'The quick brown fox jumps over the lazy dog',
                                  'The quick brown fox jumps over the lazy dog'
                                ]
                              },
                              {
                                type: 'table',
                                caption: 'Table!!!',
                                columnLabels: ['A', 'B', 'C'],
                                rows: [
                                  ['a', 'b', 'c']
                                ]
                              },
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
