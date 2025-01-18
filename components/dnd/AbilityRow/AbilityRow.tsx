import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';
import { Ability, ProficiencyType, Skill } from '../types/types';
import { ScoreContainer } from '../ScoreContainer';

export interface AbilityRowProps {
  ability: Ability;
  isSaveProficient?: boolean;
  saveMod: number;
  skills: Skill[];
}

export const AbilityRow: FC<AbilityRowProps & HTMLAttributes<HTMLDivElement>> = ({
  ability,
  isSaveProficient = false,
  saveMod,
  skills,
  ...props
}) => {
  const {
    label,
    mod,
    score
  } = ability;

  const classList = {
    'havok-design-system-dnd-ability-row': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  const getSkill = (
    label: string,
    mod: number,
    proficiency: ProficiencyType
  ) => {
    const profClassList = {
      'havok-design-system-dnd-ability-row-proficiency': true,
      'havok-design-system-dnd-ability-row-proficiency-proficient': proficiency !== 'none'
    };

    const profClassString = classNames(profClassList);

    return (
      <div className="havok-design-system-dnd-ability-row-skill" key={label}>
        <span className={profClassString}/>
        <span className="havok-design-system-dnd-ability-row-mod">
          {mod}
        </span>
        {label}  
      </div>
    );
  };

  return(
    <div
      {...props}
      className={classString}
    >
      <ScoreContainer
        label={label}
        mod={mod}
        score={score}
      />
      <div className="havok-design-system-dnd-ability-row-skills">
        {
          getSkill(
            'Saving Throw',
            saveMod,
            isSaveProficient ? 'proficient' : 'none'
          )
        }
        {skills.map(({
          label,
          mod,
          proficiency
        }) => {
          return getSkill(
            label,
            mod,
            proficiency
          )
        })}
      </div>
    </div>
  );
};
