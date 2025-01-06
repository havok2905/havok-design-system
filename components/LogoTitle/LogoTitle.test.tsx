/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';
import React from 'react';
import { LogoTitle } from './LogoTitle';

describe('Logo', () => {
  it('renders content', async () => {
    const content = 'Hello, world!';

    render(
      <LogoTitle
        content={content}
        data-testid="test-logo-title"
      />
    );

    const subject = screen.getByTestId('test-logo-title');
    const svgResult = subject.querySelector('svg');
    const textResult = screen.getByText('HELLO, WORLD!');

    expect(svgResult).toBeTruthy();
    expect(textResult).toBeTruthy();
  });

  it('passes along class names', async () => {
    const content = 'Hello, world!';

    render(
      <LogoTitle
        className="foo"
        content={content}
        data-testid="test-logo-title"
      />
    );

    const subject = screen.getByTestId('test-logo-title');

    expect(subject?.getAttribute('class')).toEqual('havok-design-system-logo-title foo');
  });
});
