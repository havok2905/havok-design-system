import { Entries } from '../../types';

export type AbilityType =
  'STR' |
  'DEX' |
  'CON' |
  'INT' |
  'WIS' |
  'CHA';

export type AlignmentType =
  'chaotic evil' |  
  'chaotic good' |
  'chaotic neutral' |
  'lawful evil' |
  'lawful good' |
  'lawful neutral' |
  'neutral' |
  'neutral evil' |
  'neutral good';

export type ProficiencyType = 'none' | 'proficient' | 'expertise';

export interface Skill {
  label: string;
  mod: number;
  proficiency: ProficiencyType;
}

export interface Ability {
  label: string;
  mod: number;
  score: number;
}

export interface AbilityRowData {
  ability: Ability,
  isSaveProficient?: boolean;
  saveMod: number;
  skills: Skill[];
}

export interface AbilitiesData {
  strength: AbilityRowData;
  dexterity: AbilityRowData;
  constitution: AbilityRowData;
  intelligence: AbilityRowData;
  wisdom: AbilityRowData;
  charisma: AbilityRowData;
}

export interface CharacterClass {
  label: string;
  level: number;
  subclass?: string;
}

export interface HitDice {
  total: number;
  value:number;
}

export interface Spellcasting {
  className: string;
  ability: AbilityType;
  attackBonus: number;
  saveDC: number;
  spells: {
    cantrips: {
      spells: string[];
    },
    first: {
      spellSlots: number;
      spells: string[];
    },
    second: {
      spellSlots: number;
      spells: string[];
    },
    third: {
      spellSlots: number;
      spells: string[];
    },
    fourth: {
      spellSlots: number;
      spells: string[];
    },
    fifth: {
      spellSlots: number;
      spells: string[];
    },
    sixth: {
      spellSlots: number;
      spells: string[];
    },
    seventh: {
      spellSlots: number;
      spells: string[];
    },
    eighth: {
      spellSlots: number;
      spells: string[];
    },
    ninth: {
      spellSlots: number;
      spells: string[];
    }
  }
}

export interface Biography {
  appearance: string[];
  backstory: string[];
  bonds: string[];
  flaws: string[];
  ideals: string[];
  personalityTraits: string[];
}

export interface InventoryItem {
  label: string;
  total: number;
}

export interface CharacterData {
  abilities: AbilitiesData;
  ac: number;
  alignment: AlignmentType;
  armorProficiencies: string[];
  background: string;
  biography: Biography;
  classes: CharacterClass[];
  features: Entries;
  hitDice: HitDice[];
  hitPoints: number;
  initiative: number;
  inventory: InventoryItem[];
  languages: string[];
  name: string;
  proficiencyBonus: number;
  senses: string[];
  species: string;
  speed: string;
  spellcasting: Spellcasting[];
  toolProficiencies: string[];
  weaponProficiencies: string[];
}