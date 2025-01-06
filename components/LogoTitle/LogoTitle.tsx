import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';
import {
  Logo,
  Title
} from '../core';

export interface LogoTitleProps {
  content: string;
}

export const LogoTitle: FC<LogoTitleProps & HTMLAttributes<HTMLDivElement>> = ({
  content,
  ...props
}) => {
  const classList = {
    'havok-design-system-logo-title': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <div
      {...props}
      className={classString}
    >
      <Logo displaySize="content"/>
      <Title as="h1" level="01">
        {content.toLocaleUpperCase()}
      </Title>
    </div>
  );
};