import React, {
  FC,
  HTMLAttributes,
  InputHTMLAttributes
} from 'react';
import classNames from 'classnames';
import { Label } from '../Label';

export interface TextInputProps {
  isError?: boolean;
  label?: string;
  name: string;
}

export const TextInput: FC<TextInputProps & InputHTMLAttributes<HTMLInputElement> & HTMLAttributes<HTMLInputElement>> = ({
  isError = false,
  label = '',
  name,
  ...props
}) => {
  const classList = {
    'havok-design-system-text-input': true,
    'havok-design-system-text-input-error': isError,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <>
      {
        label ? (
          <Label
            htmlFor={name}
            isError={isError}
            text={label}
          />
        ) : null
      }
      <input
        name={name}
        {...props}
        className={classString}
        id={name}
        type="text"
      />
    </>
  );
};
