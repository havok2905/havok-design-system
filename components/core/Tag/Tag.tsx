import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';

export interface TagProps {
  keyString: string;
  value: string;
}

export const Tag: FC<TagProps & HTMLAttributes<HTMLDivElement>> = ({
  keyString,
  value,
  ...props
}) => {
  const classList = {
    'havok-design-system-tag': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <div
      {...props}
      className={classString}
    >
      <strong>{keyString}:</strong> {value}
    </div>
  );
};
