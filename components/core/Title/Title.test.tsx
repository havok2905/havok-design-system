/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Title } from './Title';

describe('Title', () => {
  it('passes along class names', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h1"
        className="foo"
        level="01"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h1');

    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-01 foo');
  });

  it('renders h1', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h1"
        level="01"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h1');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-01');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders h1', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h2"
        level="02"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h2');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-02');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders h3', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h3"
        level="03"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h3');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-03');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders h4', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h4"
        level="04"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h4');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-04');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders h5', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h5"
        level="05"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h5');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-05');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders h6', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="h6"
        level="06"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('h6');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-06');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders p', async () => {
    const content = 'Hello, world!';

    render(
      <Title
        as="p"
        level="02"
      >
        {content}
      </Title>
    );

    const subject = document.querySelector('p');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-header-02');
    expect(subject?.textContent).toEqual(content);
  });
});
