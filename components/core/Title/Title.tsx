import React, {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames';

export type TitleAsTag =
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6' |
  'p';

export type TitleLevel =
  '01' |
  '02' |
  '03' |
  '04' |
  '05' |
  '06';

export interface TitleProps {
  as: TitleAsTag;
  children: ReactNode;
  level: TitleLevel;
}

export const Title: FC<TitleProps & HTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement
>> = ({
  as,
  children,
  level,
  ...props
}) => {
  const classList = {
    'havok-design-system-header-01': level === '01',
    'havok-design-system-header-02': level === '02',
    'havok-design-system-header-03': level === '03',
    'havok-design-system-header-04': level === '04',
    'havok-design-system-header-05': level === '05',
    'havok-design-system-header-06': level === '06',
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  switch(as) {
    case 'h1':
      return (
        <h1 {...props} className={classString}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...props} className={classString}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...props} className={classString}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...props} className={classString}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...props} className={classString}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...props} className={classString}>
          {children}
        </h6>
      );
    case 'p':
      return (
        <p {...props} className={classString}>
          {children}
        </p>
      );
    default:
      return null;
  }
};