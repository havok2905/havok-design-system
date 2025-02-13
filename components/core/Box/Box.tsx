import React, {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames';

export interface BoxProps {
  children: ReactNode;
  isDarkMode?: boolean;
}

export const Box: FC<BoxProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  isDarkMode = false,
  ...props
}) => {
  const classList = {
    'havok-design-system-box': true,
    'havok-design-system-box-dark': isDarkMode,
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
