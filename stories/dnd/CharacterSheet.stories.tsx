import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CharacterSheet } from '../../components/dnd';

const meta: Meta<typeof CharacterSheet> = {
  argTypes: {
  },
  args: {
    character: {
      abilities: {
        strength: {
          ability: {
            label: 'Strength',
            mod: -1,
            score: 8
          },
          isSaveProficient: false,
          saveMod: -1,
          skills: [
            {
              label: 'Athletics',
              mod: -1,
              proficiency: 'none'
            }
          ]
        },
        dexterity: {
          ability: {
            label: 'Dexterity',
            mod: 2,
            score: 14
          },
          isSaveProficient: false,
          saveMod: 2,
          skills: [
            {
              label: 'Acrobatics',
              mod: 5,
              proficiency: 'proficient'
            },
            {
              label: 'Sleight of Hand',
              mod: 2,
              proficiency: 'none'
            },
            {
              label: 'Stealth',
              mod: 5,
              proficiency: 'proficient'
            }
          ]
        },
        constitution: {
          ability: {
            label: 'Constitution',
            mod: 0,
            score: 10
          },
          isSaveProficient: false,
          saveMod: 0,
          skills: []
        },
        intelligence: {
          ability: {
            label: 'Intelligence',
            mod: 4,
            score: 18
          },
          isSaveProficient: true,
          saveMod: 7,
          skills: [
            {
              label: 'Arcana',
              mod: 7,
              proficiency: 'proficient'
            },
            {
              label: 'History',
              mod: 4,
              proficiency: 'none'
            },
            {
              label: 'Investigation',
              mod: 10,
              proficiency: 'expertise'
            },
            {
              label: 'Nature',
              mod: 4,
              proficiency: 'none'
            },
            {
              label: 'Religion',
              mod: 4,
              proficiency: 'none'
            }
          ]
        },
        wisdom: {
          ability: {
            label: 'Wisdom',
            mod: 1,
            score: 13
          },
          isSaveProficient: true,
          saveMod: 4,
          skills: [
            {
              label: 'Animal Handling',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Insight',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Medicine',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Perception',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Survival',
              mod: 1,
              proficiency: 'none'
            }
          ]
        },
        charisma: {
          ability: {
            label: 'Charisma',
            mod: 1,
            score: 12
          },
          isSaveProficient: false,
          saveMod: 1,
          skills: [
            {
              label: 'Deception',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Intimidation',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Performance',
              mod: 1,
              proficiency: 'none'
            },
            {
              label: 'Persuasion',
              mod: 1,
              proficiency: 'none'
            }
          ]
        }
      },
      ac: 15,
      alignment: 'chaotic good',
      armorProficiencies: [
        'Light armor',
        'Medium armor'
      ],
      background: 'Urchin',
      biography: {
        appearance: [
          'Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque mus accumsan tempus feugiat himenaeos torquent. Finibus nulla facilisi facilisis congue porttitor. Arcu porttitor velit finibus, curabitur bibendum vehicula. At volutpat velit malesuada; lacus natoque mi. Congue nam platea arcu sit turpis! Parturient habitant taciti; consequat mollis vestibulum posuere.'
        ],
        backstory: [
          'Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque mus accumsan tempus feugiat himenaeos torquent. Finibus nulla facilisi facilisis congue porttitor. Arcu porttitor velit finibus, curabitur bibendum vehicula. At volutpat velit malesuada; lacus natoque mi. Congue nam platea arcu sit turpis! Parturient habitant taciti; consequat mollis vestibulum posuere.',
          'Sed etiam tempor semper gravida, mattis per pretium ligula. Dolor placerat lectus lobortis viverra duis ipsum. Metus montes sociosqu neque turpis malesuada odio parturient? Nostra magnis libero lacus commodo pretium ultrices montes maecenas. Eleifend velit mattis euismod turpis quisque class. Vel nunc fringilla enim ut sapien dapibus condimentum. Sollicitudin placerat suspendisse velit nisl diam sodales dolor. Ultricies vehicula vehicula platea iaculis quam cursus class ullamcorper fermentum.',
          'In nostra etiam gravida mauris libero imperdiet montes parturient. Penatibus urna per pretium purus dolor scelerisque pellentesque. Torquent inceptos orci morbi inceptos habitant leo fusce quis. Phasellus nisl et vehicula nostra luctus etiam nisi integer. Dignissim dolor posuere semper lacinia eget vulputate. Suscipit mi justo ad ligula blandit erat sociosqu.'
        ],
        bonds: [
          'Lorem ipsum odor amet, consectetuer adipiscing elit.',
          'Lorem ipsum odor amet, consectetuer adipiscing elit.'
        ],
        flaws: [
          'Lorem ipsum odor amet, consectetuer adipiscing elit.',
          'Lorem ipsum odor amet, consectetuer adipiscing elit.'
        ],
        ideals: [
          'Lorem ipsum odor amet, consectetuer adipiscing elit.',
          'Lorem ipsum odor amet, consectetuer adipiscing elit.'
        ],
        personalityTraits: [
          'Lorem ipsum odor amet, consectetuer adipiscing elit.',
          'Lorem ipsum odor amet, consectetuer adipiscing elit.'
        ]
      },
      classes: [
        {
          label: 'Wizard',
          level: 6,
          subclass: 'Bladsinging'
        },
        {
          label: 'Rogue',
          level: 1
        }
      ],
      features: [
        {
          type: 'titledentry',
          name: 'Spellcasting',
          level: 3,
          entries: [
            'As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.',
            {
              type: 'titledentry',
              name: 'Cantrips',
              level: 4,
              entries: [
                'At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.'
              ]
            },
            {
              type: 'titledentry',
              name: 'Spellbook',
              level: 4,
              entries: [
                'At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.',
                'The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard\'s chest, for example, or in a dusty tome in an ancient library.',
                {
                  type: 'titledentry',
                  name: 'Copying a Spell into the Book',
                  level: 5,
                  entries: [
                    'When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.',
                    'Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.',
                    'For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.'
                  ]
                },
                {
                  type: 'titledentry',
                  name: 'Replacing the Book',
                  level: 5,
                  entries: [
                    'You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.',
                    'If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.'
                  ]
                },
                {
                  type: 'titledentry',
                  name: 'The Book\'s Appearance',
                  level: 5,
                  entries: [
                    'be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.'
                  ]
                }
              ]
            },
            {
              type: 'titledentry',
              name: 'Preparing and Casting Spells',
              level: 4,
              entries: [
                'The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.',
                'You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.',
                'For example, if you\'re a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn\'t remove it from your list of prepared spells.',
                'You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.'
              ]
            },
            {
              type: 'titledentry',
              name: 'Spellcasting Ability',
              level: 4,
              entries: [
                'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
                'Spell save DC = 8 + your proficiency bonus + your Intelligence modifier',
                'Spell attack modifier = your proficiency bonus + your Intelligence modifier'
              ]
            },
            {
              type: 'titledentry',
              name: 'Ritual Casting',
              level: 4,
              entries: [
                'You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don\'t need to have the spell prepared.'
              ]
            },
            {
              type: 'titledentry',
              name: 'Spellcasting Focus',
              level: 4,
              entries: [
                'You can use an arcane focus as a spellcasting focus for your wizard spells.'
              ]
            },
            {
              type: 'titledentry',
              name: 'Learning Spells of 1st Level and Higher',
              level: 4,
              entries: [
                'Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook.'
              ]
            }
          ]
        }
      ],
      hitDice: [
        {
          total: 6,
          value: 6
        },
        {
          total: 1,
          value: 8
        },
      ],
      hitPoints: 20,
      initiative: 2,
      inventory: [
        {
          label: 'Leather Armor',
          total: 1
        },
        {
          label: 'Dagger',
          total: 1
        },
        {
          label: 'Spellbook',
          total: 1
        },
      ],
      languages: [
        'Common',
        'Infernal'
      ],
      name: 'Victoria Faerith',
      proficiencyBonus: 3,
      senses: [
        'passive Perception 11',
        'darkvision 60ft.'
      ],
      species: 'Tiefling',
      speed: '30ft.',
      spellcasting: [
        {
          ability: 'INT',
          attackBonus: 7,
          className: 'Wizard',
          saveDC: 15,
          spells: {
            cantrips: {
              spells: [
                'Booming Blade'
              ]
            },
            first: {
              spellSlots: 2,
              spells: [
                'Magic Missile',
                'Shield'
              ]
            },
            second: {
              spellSlots: 0,
              spells: []
            },
            third: {
              spellSlots: 0,
              spells: []
            },
            fourth: {
              spellSlots: 0,
              spells: []
            },
            fifth: {
              spellSlots: 0,
              spells: []
            },
            sixth: {
              spellSlots: 0,
              spells: []
            },
            seventh: {
              spellSlots: 0,
              spells: []
            },
            eighth: {
              spellSlots: 0,
              spells: []
            },
            ninth: {
              spellSlots: 0,
              spells: []
            }
          }
        }
      ],
      toolProficiencies: [
        'Playing cards'
      ],
      weaponProficiencies: [
        'Simple weapons',
        'Rapier'
      ]
    }
  },
  component: CharacterSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DND/CharacterSheet'
};

export default meta;

export const Default: StoryObj<typeof CharacterSheet> = {};
