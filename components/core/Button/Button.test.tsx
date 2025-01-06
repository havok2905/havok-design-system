/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';
import React from 'react';
import { Button } from './Button';

describe('ButtonContainer', () => {
  it('renders', async () => {
    render(
      <Button text="Foo"/>
    );

    const subject = screen.getByText('Foo');

    expect(subject).toBeTruthy();
    expect(subject.getAttribute('class')).toEqual('havok-design-system-button havok-design-system-button-primary');
  });

  it('renders primary', async () => {
    render(
      <Button buttonType="primary" text="Foo"/>
    );

    const subject = screen.getByText('Foo');

    expect(subject.getAttribute('class')).toEqual('havok-design-system-button havok-design-system-button-primary');
  });

  it('renders secondary', async () => {
    render(
      <Button buttonType="secondary" text="Foo"/>
    );

    const subject = screen.getByText('Foo');

    expect(subject.getAttribute('class')).toEqual('havok-design-system-button havok-design-system-button-secondary');
  });

  it('renders destructive', async () => {
    render(
      <Button buttonType="destructive" text="Foo"/>
    );

    const subject = screen.getByText('Foo');

    expect(subject.getAttribute('class')).toEqual('havok-design-system-button havok-design-system-button-destructive');
  });

  it('passes along class names', async () => {
    render(
      <Button
        buttonType="primary"
        className="foo"
        text="Foo"
      />
    );

    const subject = screen.getByText('Foo');
    expect(subject.getAttribute('class')).toEqual('havok-design-system-button havok-design-system-button-primary foo');
  });
});
