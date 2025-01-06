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
  items: SimpleListItem[];
}

export const SimpleList: FC<SimpleListProps & HTMLAttributes<HTMLUListElement>> = ({
  items,
  ...props
}) => {
  const classList = {
    'havok-design-system-simple-list': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <ul className={classString}>
      {
        Children.toArray(items.map((item) => {
          return (
            <li className="havok-design-system-simple-list-item">
              {item.content}
            </li>
          );
        }))
      }
    </ul>
  );
};
