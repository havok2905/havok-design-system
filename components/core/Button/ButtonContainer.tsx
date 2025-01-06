import React, {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames';

export interface ButtonContainerProps {
  children: ReactNode;
}

export const ButtonContainer: FC<ButtonContainerProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    'havok-design-system-button-container': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <div {...props} className={classString}>
      {children}
    </div>
  );
};
