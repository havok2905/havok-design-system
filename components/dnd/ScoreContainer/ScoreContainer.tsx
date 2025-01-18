import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';

export interface ScoreContainerProps {
  label: string;
  mod: number;
  score: number;
}

export const ScoreContainer: FC<ScoreContainerProps & HTMLAttributes<HTMLDivElement>> = ({
  label,
  mod,
  score,
  ...props
}) => {
  const classList = {
    'havok-design-system-dnd-score-container': true,
    'havok-design-system-dnd-score-container-4px': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  const modString = mod < 0 ? `-${mod}` : `+${mod}`;

  return (
    <div
      {...props}
      className={classString}
    >
      <div className="havok-design-system-dnd-score-container-inner-bevel">
        <div className="havok-design-system-dnd-score-container-score">
          {score}
        </div>
      </div>
      <div className="havok-design-system-dnd-score-container-mod">
        {modString}
      </div>
      <div className="havok-design-system-dnd-score-container-title">
        {label}
      </div>
    </div>
  );
};
