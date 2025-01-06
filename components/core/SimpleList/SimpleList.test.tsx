/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { SimpleList } from './SimpleList';

describe('SimpleList', () => {
  it('renders', async () => {
    render(
      <SimpleList items={[
        {
          content: 'foo'
        },
        {
          content: 'bar'
        },
        {
          content: 'baz'
        },
      ]}/>
    );

    const subject = document.querySelector('ul');
    const itemSubjects = document.getElementsByTagName('li');

    expect(subject).toBeTruthy();
    expect(itemSubjects[0]).toBeTruthy();
    expect(itemSubjects[1]).toBeTruthy();
    expect(itemSubjects[2]).toBeTruthy();
    
    expect(itemSubjects[0]).toHaveTextContent('foo');
    expect(itemSubjects[1]).toHaveTextContent('bar');
    expect(itemSubjects[2]).toHaveTextContent('baz');
  });

  it('passes along class names', async () => {
    render(
      <SimpleList className="foo" items={[
        {
          content: 'foo'
        },
        {
          content: 'bar'
        },
        {
          content: 'baz'
        },
      ]}/>
    );

    const subject = document.querySelector('ul');

    expect(subject?.getAttribute('class')).toEqual('havok-design-system-simple-list foo');
  });
});
