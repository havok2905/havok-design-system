/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';
import React from 'react';
import { Label } from './Label';

describe('Label', () => {
  it('renders', async () => {
    render(
      <Label
        data-testid="test-label"
        text="Label"
      />
    );

    const subject = screen.getByTestId('test-label');

    expect(subject).toBeTruthy();
    expect(subject.textContent).toEqual('Label');
  });

  it('renders in an error state', async () => {
    render(
      <Label
        data-testid="test-label"
        isError
        text="Label"
      />
    );

    const subject = screen.getByTestId('test-label');

    expect(subject).toBeTruthy();
    expect(subject.getAttribute('class')).toEqual('havok-design-system-label havok-design-system-label-error');
  });

  it('passes along class names', async () => {
    const content = 'Foo';

    render(
      <Label
        className="foo"
        data-testid="test-label"
        text="Label"
      />
    );

    const subject = screen.getByTestId('test-label');

    expect(subject.getAttribute('class')).toEqual('havok-design-system-label foo');
  });
});
