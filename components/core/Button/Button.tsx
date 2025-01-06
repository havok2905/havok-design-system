import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';

export type ButtonType = 'destructive' | 'primary' | 'secondary';

export interface ButtonProps {
  buttonType?: ButtonType;
  text: string;
}

export const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  buttonType = 'primary',
  text,
  ...props
}) => {
  const classList = {
    'havok-design-system-button': true,
    'havok-design-system-button-destructive': buttonType === 'destructive',
    'havok-design-system-button-primary': buttonType === 'primary',
    'havok-design-system-button-secondary': buttonType === 'secondary',
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <button
      {...props}
      className={classString}
    >
      {text}
    </button>
  )
};
