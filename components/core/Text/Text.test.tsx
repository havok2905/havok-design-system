/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Text } from './Text';

describe('Text', () => {
  it('renders', async () => {
    const content = 'Hello, world!';

    render(
      <Text>
        {content}
      </Text>
    );

    const subject = document.querySelector('p');

    expect(subject).toBeTruthy();
    expect(subject?.textContent).toEqual(content);
  });

  it('passes along class names', async () => {
    const content = 'Hello, world!';

    render(
      <Text className="foo">
        {content}
      </Text>
    );

    const subject = document.querySelector('p');

    expect(subject?.getAttribute('class')).toEqual('havok-design-system-body-text foo');
  });

  it('renders bold', async () => {
    const content = 'Hello, world!';

    render(
      <Text isBold>
        {content}
      </Text>
    );

    const subject = document.querySelector('p');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-body-text havok-design-system-bold-text');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders italics', async () => {
    const content = 'Hello, world!';

    render(
      <Text isItalics>
        {content}
      </Text>
    );

    const subject = document.querySelector('p');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-body-text havok-design-system-italics-text');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders sub', async () => {
    const content = 'Hello, world!';

    render(
      <Text isSub>
        {content}
      </Text>
    );

    const subject = document.querySelector('p');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-sub-text');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders bold italics sub', async () => {
    const content = 'Hello, world!';

    render(
      <Text
        isBold
        isItalics
        isSub
      >
        {content}
      </Text>
    );

    const subject = document.querySelector('p');

    expect(subject).toBeTruthy();
    expect(subject?.getAttribute('class')).toEqual('havok-design-system-bold-text havok-design-system-italics-text havok-design-system-sub-text');
    expect(subject?.textContent).toEqual(content);
  });

  it('renders span italics sub', async () => {
    render(
      <Text>
        Hello, <Text isBold isSub isItalics isSpan>world!</Text>
      </Text>
    );

    const outer = document.querySelector('p');
    const inner = document.querySelector('span');

    expect(outer).toBeTruthy();
    expect(inner).toBeTruthy();

    expect(outer?.getAttribute('class')).toEqual('havok-design-system-body-text');
    expect(outer?.textContent).toEqual('Hello, world!');
    
    expect(inner?.getAttribute('class')).toEqual('havok-design-system-bold-text havok-design-system-italics-text havok-design-system-sub-text');
    expect(inner?.textContent).toEqual('world!');
  });
});
