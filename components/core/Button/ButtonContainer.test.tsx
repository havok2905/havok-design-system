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
import { ButtonContainer } from './ButtonContainer';

describe('ButtonContainer', () => {
  it('renders', async () => {
    render(
      <ButtonContainer>
        <Button
          buttonType="primary"
          text="Foo"
        />
      </ButtonContainer>
    );

    const subject = screen.getByText('Foo');

    expect(subject).toBeTruthy();
  });

  it('passes along class names', async () => {
    render(
      <ButtonContainer
        className="foo"
        data-testid="test-button-container">
        <Button
          buttonType="primary"
          text="Foo"
        />
      </ButtonContainer>
    );

    const subject = screen.getByTestId('test-button-container');

    expect(subject).toBeTruthy();
    expect(subject.getAttribute('class')).toEqual('havok-design-system-button-container foo');
  });
});
