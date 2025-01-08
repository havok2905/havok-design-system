/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';
import React from 'react';
import { Box } from './Box';

describe('Box', () => {
  it('renders', async () => {
    render(
      <Box data-testid="text-box">
        Foo
      </Box>
    );

    const subject = screen.getByTestId('text-box');

    expect(subject).toBeTruthy();
  });

  it('passes along class names', async () => {
    render(
      <Box
        className="foo"
        data-testid="text-box"
      >
        Foo
      </Box>
    );

    const subject = screen.getByTestId('text-box');

    expect(subject.getAttribute('class')).toEqual('havok-design-system-box foo');
  });
});
