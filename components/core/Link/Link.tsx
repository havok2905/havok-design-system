import React, {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames';

export interface LinkProps {
  children: ReactNode;
  to: string;
}

export const Link: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  children,
  to,
  ...props
}) => {
  const classList = {
    'havok-design-system-link': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <a
    
      href={to}
      {...props}
      className={classString}
    >
      {children}
    </a>
  );
};
