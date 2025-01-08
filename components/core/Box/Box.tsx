import React, {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames';

export interface BoxProps {
  children: ReactNode;
}

export const Box: FC<BoxProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    'havok-design-system-box': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <div
      {...props}
      className={classString}
    >
      {children}
    </div>
  );
};
