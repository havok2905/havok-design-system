import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';
import { Icon, IconTypes } from '../Icons';

export type ButtonType = 'destructive' | 'primary' | 'secondary';

export interface ButtonProps {
  buttonType?: ButtonType;
  iconType?: IconTypes;
  text: string;
}

export const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  buttonType = 'primary',
  iconType,
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
      {
        iconType ? (
          <Icon
            iconType={iconType}
          />
        ) : null
      }
      {text}
    </button>
  );
};
