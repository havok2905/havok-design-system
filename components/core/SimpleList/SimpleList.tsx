import React, {
  Children,
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';

export interface SimpleListItem {
  content: string;
}

export interface SimpleListProps {
  isBulleted?: boolean;
  items: SimpleListItem[];
}

export const SimpleList: FC<SimpleListProps & HTMLAttributes<HTMLUListElement>> = ({
  isBulleted = false,
  items,
  ...props
}) => {
  const classList = {
    'havok-design-system-simple-list': !isBulleted,
    'havok-design-system-simple-list-bulleted': isBulleted,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <ul className={classString}>
      {
        Children.toArray(items.map((item) => {
          const itemClassList = {
            'havok-design-system-simple-list-item': !isBulleted,
            'havok-design-system-simple-list-item-bulleted': isBulleted
          };

          const itemClassString = classNames(itemClassList);

          return (
            <li className={itemClassString}>
              {item.content}
            </li>
          );
        }))
      }
    </ul>
  );
};
