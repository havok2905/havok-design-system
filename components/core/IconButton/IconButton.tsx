import React, {
  FC,
  forwardRef,
  ForwardedRef,
  HTMLAttributes,
  Ref
} from 'react';
import classNames from 'classnames';
import { Icon, IconTypes } from '../Icons';

export interface IconButtonProps {
  iconType: IconTypes;
  isDarkMode?: boolean;
  titleText: string;
}

export type ExtendedIconButtonProps = IconButtonProps & HTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef((
  {
    iconType,
    isDarkMode = false,
    titleText,
    ...props
  }: ExtendedIconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const classList = {
    'havok-design-system-icon-button': true,
    'havok-design-system-icon-button-dark-mode': isDarkMode,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <button
      {...props}
      className={classString}
      ref={ref}
      title={titleText}
    >
      {
        iconType ? (
          <Icon
            iconType={iconType}
          />
        ) : null
      }
    </button>
  );
});
