/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';
import React from 'react';
import { Link } from './Link';

describe('Link', () => {
  it('renders', async () => {
    const content = 'Foo';

    render(
      <Link to="#">
        {content}
      </Link>
    );

    const subject = screen.getByText(content);

    expect(subject).toBeTruthy();
    expect(subject.getAttribute('href')).toEqual('#');
    expect(subject.getAttribute('class')).toEqual('havok-design-system-link');
  });

  it('passes along class names', async () => {
    const content = 'Foo';

    render(
      <Link
        className="foo"
        to="#">
        {content}
      </Link>
    );

    const subject = screen.getByText(content);

    expect(subject.getAttribute('class')).toEqual('havok-design-system-link foo');
  });
});
