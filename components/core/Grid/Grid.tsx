import React, {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames';

export interface GridProps {
  children: ReactNode;
}

export interface GridRowProps {
  children: ReactNode;
}

export interface ItemProps {
  children: ReactNode;
  columns: number
}

export const Item: FC<ItemProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  columns
}) => {
  const classList = {
    'havok-design-system-item-1': columns === 1,
    'havok-design-system-item-2': columns === 2,
    'havok-design-system-item-3': columns === 3,
    'havok-design-system-item-4': columns === 4,
    'havok-design-system-item-5': columns === 5,
    'havok-design-system-item-6': columns === 6,
    'havok-design-system-item-7': columns === 7,
    'havok-design-system-item-8': columns === 8,
    'havok-design-system-item-9': columns === 9,
    'havok-design-system-item-10': columns === 10,
    'havok-design-system-item-11': columns === 11,
    'havok-design-system-item-12': columns === 12
  };

  return (
    <div className={classNames(classList)}>
      {children}
    </div>
  );
};

export const Grid: FC<GridProps & HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  return (
    <div className="havok-design-system-grid">
      {children}
    </div>
  );
};

export const GridRow: FC<GridRowProps & HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  return (
    <div className="havok-design-system-row">
      {children}
    </div>
  );
};
