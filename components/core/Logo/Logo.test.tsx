/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders content', async () => {
    render(
      <Logo displaySize="content"/>
    );

    const subject = document.querySelector('svg');

    expect(subject).toBeTruthy();
    expect(subject!.getAttribute('class')).toEqual('havok-design-system-logo-content');
  });

  it('renders display', async () => {
    render(
      <Logo displaySize="display"/>
    );

    const subject = document.querySelector('svg');

    expect(subject).toBeTruthy();
    expect(subject!.getAttribute('class')).toEqual('havok-design-system-logo-display');
  });

  it('renders thumbnail', async () => {
    render(
      <Logo displaySize="thumbnail"/>
    );

    const subject = document.querySelector('svg');

    expect(subject).toBeTruthy();
    expect(subject!.getAttribute('class')).toEqual('havok-design-system-logo-thumbnail');
  });

  it('passes along class names', async () => {
    render(
      <Logo
        className="foo"
        displaySize="content"
      />
    );

    const subject = document.querySelector('svg');

    expect(subject!.getAttribute('class')).toEqual('havok-design-system-logo-content foo');
  });
});
