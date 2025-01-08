/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';
import React from 'react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders', async () => {
    render(
      <TextInput
        data-testid="test-input"
        name="test-name"
      />
    );

    const subject = screen.getByTestId('test-input');

    expect(subject).toBeTruthy();
  });

  it('renders a label', async () => {
    render(
      <TextInput
        data-testid="test-input"
        label="Test Input"
        name="test-name"
      />
    );

    const subject = screen.getByTestId('test-input');
    const labelSubject = document.querySelector('label');

    expect(subject).toBeTruthy();
    expect(labelSubject).toBeTruthy();
    expect(labelSubject?.textContent).toEqual('Test Input');
  });

  it('renders in an error state', async () => {
    render(
      <TextInput
        data-testid="test-input"
        isError
        label="Test Input"
        name="test-name"
      />
    );

    const subject = screen.getByTestId('test-input');
    const labelSubject = document.querySelector('label');

    expect(subject).toBeTruthy();
    expect(subject.getAttribute('class')).toEqual('havok-design-system-text-input havok-design-system-text-input-error');
    expect(labelSubject?.getAttribute('class')).toEqual('havok-design-system-label havok-design-system-label-error');
  });

  it('passes along class names', async () => {
    const content = 'Foo';

    render(
      <TextInput
        className="foo"
        data-testid="test-input"
        name="test-name"
      />
    );

    const subject = screen.getByTestId('test-input');

    expect(subject.getAttribute('class')).toEqual('havok-design-system-text-input foo');
  });
});
