import React, { FC, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';

export const TableBody: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <tbody
      {...props}
      className={classString}
    >
      {children}
    </tbody>
  );
};

export const TableHead: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <thead
      {...props}
      className={classString}
    >
      {children}
    </thead>
  );
};

export const TableRow: FC<HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    'havok-design-system-table-tr': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <tr
      {...props}
      className={classString}
    >
      {children}
    </tr>
  );
};

export const TableHeader: FC<HTMLAttributes<HTMLTableHeaderCellElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    'havok-design-system-table-th': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <th
      scope="col"
      {...props}
      className={classString}
    >
      {children}
    </th>
  );
};

export const TableCell: FC<HTMLAttributes<HTMLTableCellElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    'havok-design-system-table-td': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <td
      {...props}
      className={classString}
    >
      {children}
    </td>
  );
};

export const Table: FC<HTMLAttributes<HTMLTableElement>> = ({
  children,
  ...props
}) => {
  const classList = {
    'havok-design-system-table': true,
    [props.className ?? '']: true,
  };

  const classString = classNames(classList);

  return (
    <table
      {...props}
      className={classString}
    >
      {children}
    </table>  
  );
};
