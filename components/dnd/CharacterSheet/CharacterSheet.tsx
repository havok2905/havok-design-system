import React, { FC } from 'react';
import {
  GenericContentBlock,
  Grid,
  GridRow,
  Item,
  SimpleList,
  SimpleListItem,
  Text,
  Title
} from '../../core';
import {
  CharacterClass,
  CharacterData,
  HitDice
} from '../types/types';
import { Abilities } from '../Abilities';
import { ResourceContainer } from '../ResourceContainer';

export interface CharacterSheetProps {
  character: CharacterData;
};

export const CharacterSheet: FC<CharacterSheetProps> = ({
  character
}) => {
  const getClassString = (characterClasses: CharacterClass[]) => {
    return characterClasses.map(characterClass => {
      return `${characterClass.label}${characterClass.subclass ? ` - ${characterClass.subclass}` : ''} ( ${characterClass.level} )`;
    }).join(', ');
  };

  const getHitDiceString = (hitDice: HitDice[]) => {
    return hitDice.map(hitDie => {
      return `${hitDie.total}d${hitDie.value}`;
    }).join(', ');
  };

  const getSpellListItems = (spells: string[]): SimpleListItem[] => {
    return spells.map(spell => {
      return {
        content: spell
      };
    });
  };

  const inventoryItems: SimpleListItem[] = character.inventory.map((inventoryItem) => {
    return {
      content: `${inventoryItem.total} - ${inventoryItem.label}`
    };
  });

  return (
    <div style={{
      width: '760px'
    }}>
      <Grid>
        <GridRow>
          <Item columns={12}>
            <Title as="h1" level="01">
              {character.name}
            </Title>
          </Item>
        </GridRow>
        <GridRow>
          <Item columns={12}>
            <Text>
              <Text isBold isSpan>Class & Level:</Text> {getClassString(character.classes)}
            </Text>
            <Text>
              <Text isBold isSpan>Background:</Text> {character.background}
            </Text>
            <Text>
              <Text isBold isSpan>Species:</Text> {character.species}
            </Text>
            <Text>
              <Text isBold isSpan>Alignment:</Text> {character.alignment}
            </Text>
          </Item>
        </GridRow>
        <GridRow>
          <Item columns={5}>
            <Abilities abilities={character.abilities}/>
          </Item>
          <Item columns={7}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '4px'
            }}>
              <ResourceContainer
                label="Proficiency Bonus"
                value={String(character.proficiencyBonus)}
              />
              <ResourceContainer
                label="AC"
                value={String(character.ac)}
              />
              <ResourceContainer
                label="Speed"
                value={character.speed}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <ResourceContainer
                label="Initiative"
                value={String(character.initiative)}
              />
              <ResourceContainer
                label="Hit Points"
                value={String(character.hitPoints)}
              />
              <ResourceContainer
                label="Hit Dice"
                value={getHitDiceString(character.hitDice)}
              />
            </div>
            <Text isSub>
              <Text isBold isSub isSpan>Senses:</Text> {character.senses.join(', ')}
            </Text>
            <Text isSub>
              <Text isBold isSub isSpan>Languages:</Text> {character.languages.join(', ')}
            </Text>
            <Text isSub>
              <Text isBold isSub isSpan>Armor:</Text> {character.armorProficiencies.join(', ')}
            </Text>
            <Text isSub>
              <Text isBold isSub isSpan>Weapons:</Text> {character.weaponProficiencies.join(', ')}
            </Text>
            <Text isSub>
              <Text isBold isSub isSpan>Tools:</Text> {character.toolProficiencies.join(', ')}
            </Text>
          </Item>
        </GridRow>
        <GridRow>
          <Item columns={12}>
            
            {
              character.features ? (
                <>
                  <Title as="h2" level="02">
                    Features
                  </Title>
                  {
                    character.features.length ? (
                      <GenericContentBlock entires={character.features}/>
                    ) : null
                  }
                </>
              ) : null
            }
            {
              character.spellcasting ? (
                <>
                  <Title as="h2" level="02">
                    Spellcasting
                  </Title>
                  {
                    character.spellcasting.map((spellcasting) => {
                      return (
                        <>
                          <Title as="h3" level="03">
                            {spellcasting.className}
                          </Title>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '20px'
                          }}>
                            <ResourceContainer
                              label="Ability"
                              value={spellcasting.ability}
                            />
                            <ResourceContainer
                              label="Attack Bonus"
                              value={String(spellcasting.attackBonus)}
                            />
                            <ResourceContainer
                              label="Save DC"
                              value={String(spellcasting.saveDC)}
                            />
                          </div>
                          {
                            spellcasting.spells.cantrips.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  Cantrips
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.cantrips.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.first.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  1st Level - {spellcasting.spells.first.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.first.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.second.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  2nd Level - {spellcasting.spells.second.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.second.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.third.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  3rd Level - {spellcasting.spells.third.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.third.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.fourth.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  4th Level - {spellcasting.spells.fourth.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.fourth.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.fifth.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  5th Level - {spellcasting.spells.fifth.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.fifth.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.sixth.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  6th Level - {spellcasting.spells.sixth.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.sixth.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.seventh.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  7th Level - {spellcasting.spells.seventh.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.seventh.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.eighth.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  8th Level - {spellcasting.spells.eighth.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.eighth.spells)}/>
                              </>
                            ) : null
                          }
                          {
                            spellcasting.spells.ninth.spells.length ? (
                              <>
                                <Title as="h4" level="04">
                                  9th Level - {spellcasting.spells.ninth.spellSlots}
                                </Title>
                                <SimpleList items={getSpellListItems(spellcasting.spells.ninth.spells)}/>
                              </>
                            ) : null
                          }
                        </>
                      )
                    })
                  }
                </>
              ) : null
            }
            <Title as="h2" level="02">
              Inventory
            </Title>
            <SimpleList items={inventoryItems}/>
            <Title as="h2" level="02">
              Biography
            </Title>
            <Title as="h3" level="03">
              Appearance
            </Title>
            {
              character.biography.appearance.map((entry) => {
                return (
                  <Text>
                    {entry}
                  </Text>
                );
              })
            }
            <Title as="h3" level="03">
              Personality
            </Title>
            <Text isBold>
              Personality Traits
            </Text>
            {
              character.biography.personalityTraits.map((entry) => {
                return (
                  <Text>
                    {entry}
                  </Text>
                );
              })
            }
            <Text isBold>
              Bonds
            </Text>
            {
              character.biography.bonds.map((entry) => {
                return (
                  <Text>
                    {entry}
                  </Text>
                );
              })
            }
            <Text isBold>
              Ideals
            </Text>
            {
              character.biography.ideals.map((entry) => {
                return (
                  <Text>
                    {entry}
                  </Text>
                );
              })
            }
            <Text isBold>
              Flaws
            </Text>
            {
              character.biography.flaws.map((entry) => {
                return (
                  <Text>
                    {entry}
                  </Text>
                );
              })
            }
            <Title as="h3" level="03">
              Backstory
            </Title>
            {
              character.biography.backstory.map((entry) => {
                return (
                  <Text>
                    {entry}
                  </Text>
                );
              })
            }
          </Item>
        </GridRow>
      </Grid>
    </div>    
  );
};
