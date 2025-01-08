import React, {
  FC,
  HTMLAttributes,
  LabelHTMLAttributes
} from 'react';
import classNames from 'classnames';

export interface LabelProps {
  isError?: boolean;
  text: string;
}

export const Label: FC<LabelProps & HTMLAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement>> = ({
  isError = false,
  text,
  ...props
}) => {
  const classList = {
    'havok-design-system-label': true,
    'havok-design-system-label-error': isError,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <label
      {...props}
      className={classString}
    >
      {text}
    </label>
  )
};