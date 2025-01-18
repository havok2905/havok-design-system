import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';

export interface ResourceContainerProps {
  label: string;
  value: string;
}

export const ResourceContainer: FC<ResourceContainerProps & HTMLAttributes<HTMLDivElement>> = ({
  label,
  value,
  ...props
}) => {
  const classList = {
    'havok-design-system-dnd-resource-container': true,
    'havok-design-system-dnd-resource-container-4px': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <div
      {...props}
      className={classString}
    >
      <div className="havok-design-system-dnd-resource-container-inner-bevel">
        <div className="havok-design-system-dnd-resource-container-value">
          {value}
        </div>
      </div>
      <div className="havok-design-system-dnd-resource-container-title">
        {label}
      </div>
    </div>
  );
};
