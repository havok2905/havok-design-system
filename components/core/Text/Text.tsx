import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  useCallback
} from 'react';
import classNames from 'classnames';

export interface TextProps {
  children: ReactNode;
  isBold?: boolean;
  isItalics?: boolean;
  isSpan?: boolean;
  isSub?: boolean;
};

export const Text: FC<TextProps & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>> = ({
  children,
  isBold = false,
  isItalics = false,
  isSpan = false,
  isSub = false,
  ...props
}) => {
  const classList = {
    'havok-design-system-body-text': !isSub,
    'havok-design-system-bold-text': isBold,
    'havok-design-system-italics-text': isItalics,
    'havok-design-system-sub-text': isSub,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  const getBoldText = useCallback((nodes: ReactNode) => {
    if (!isBold) return nodes;

    return <strong>{nodes}</strong>;
  }, [isBold]);

  const getItalicsText = useCallback((nodes: ReactNode) => {
    if (!isItalics) return nodes;

    return <em>{nodes}</em>;
  }, [isItalics]);

  const getSubText = useCallback((nodes: ReactNode) => {
    if (!isSub) return nodes;

    return <sub>{nodes}</sub>;
  }, [isSub]);
  
  const content = getSubText(getBoldText(getItalicsText(children)));

  return isSpan ? (
    <span {...props} className={classString}>
      {content}
    </span>
  ) : (
    <p {...props} className={classString}>
      {content}
    </p>
  );
};