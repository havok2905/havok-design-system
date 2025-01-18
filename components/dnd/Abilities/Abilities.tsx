import React, {
  FC,
  HTMLAttributes
} from 'react';
import classNames from 'classnames';
import { AbilitiesData } from '../types/types';
import { AbilityRow } from '../AbilityRow';

export interface AbilitiesProps {
  abilities: AbilitiesData;
}

export const Abilities: FC<AbilitiesProps & HTMLAttributes<HTMLDivElement>> = ({
  abilities,
  ...props
}) => {
  const classList = {
    'havok-design-system-dnd-abilities': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  return (
    <div
      {...props}
      className={classString}
    >
      <AbilityRow
        ability={abilities.strength.ability}
        isSaveProficient={abilities.strength.isSaveProficient}
        saveMod={abilities.strength.saveMod}
        skills={abilities.strength.skills}
      />
      <AbilityRow
        ability={abilities.dexterity.ability}
        isSaveProficient={abilities.dexterity.isSaveProficient}
        saveMod={abilities.dexterity.saveMod}
        skills={abilities.dexterity.skills}
      />
      <AbilityRow
        ability={abilities.constitution.ability}
        isSaveProficient={abilities.constitution.isSaveProficient}
        saveMod={abilities.constitution.saveMod}
        skills={abilities.constitution.skills}
      />
      <AbilityRow
        ability={abilities.intelligence.ability}
        isSaveProficient={abilities.intelligence.isSaveProficient}
        saveMod={abilities.intelligence.saveMod}
        skills={abilities.intelligence.skills}
      />
      <AbilityRow
        ability={abilities.wisdom.ability}
        isSaveProficient={abilities.wisdom.isSaveProficient}
        saveMod={abilities.wisdom.saveMod}
        skills={abilities.wisdom.skills}
      />
      <AbilityRow
        ability={abilities.charisma.ability}
        isSaveProficient={abilities.charisma.isSaveProficient}
        saveMod={abilities.charisma.saveMod}
        skills={abilities.charisma.skills}
      />
    </div>
  );
};