import React, {
  FC,
  ReactNode
} from 'react';
import {
  SimpleList,
  SimpleListItem
} from '../SimpleList';
import { Text } from '../Text';
import {
  Title,
  TitleAsTag,
  TitleLevel
} from '../Title';
import {
  Entries,
  Entry,
  ListEntry,
  TableEntry,
  TitledEntry
} from '../../types';

export interface GenericContentBlockProps {
  entires: Entries
}

export const GenericContentBlock: FC<GenericContentBlockProps> = ({
  entires
}) => {
  const getGenericContent = (entry: Entry): ReactNode => {
    if (typeof entry === 'string') {
      return (
        <Text>
          {entry}
        </Text>
      );
    }

    if ((entry as ListEntry).type === 'list') {
      const items: SimpleListItem[] = (entry as ListEntry).items.map(item => {
        return {
          content: item
        };
      });

      return (
        <SimpleList
          items={items}
          isBulleted
        />
      )
    }

    if ((entry as TableEntry).type === 'table') {
      const {
        caption = '',
        columnLabels,
        rows
      } = (entry as TableEntry);

      // TODO -> Build real table

      return (
        <table>
          <thead>
            <tr>
              {
                columnLabels.map((label, index) => {
                  return (
                    <th
                      key={index}
                      scope="col"
                    >
                      {label}
                    </th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              rows.map((row, index) => {
                return (
                  <tr key={index}>
                    {
                      row.map((value, index) => {
                        return (
                          <td key="index">
                            {value}
                          </td>
                        );
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
          {
            caption ? (
              <caption>
                {caption}
              </caption>
            ) : null
          }
        </table>
      )
    }

    if ((entry as TitledEntry).type === 'titledentry') {
      const {
        entries,
        level,
        name
      } = (entry as TitledEntry);

      let titleAs = '';
      let titleLevel = '';

      switch(level) {
        case 1:
          titleAs = 'h1';
          titleLevel = '01';
          break;
        case 2:
          titleAs = 'h2';
          titleLevel = '02';
          break;
        case 3:
          titleAs = 'h3';
          titleLevel = '03';
          break;
        case 4:
          titleAs = 'h4';
          titleLevel = '04';
          break;
        case 5:
          titleAs = 'h5';
          titleLevel = '05';
          break;
        case 6:
          titleAs = 'h6';
          titleLevel = '06';
          break;
      }

      return (
        <>
          <Title
            as={titleAs as TitleAsTag}
            level={titleLevel as TitleLevel}
          >
            {name}
          </Title>
          {
            entries.map((entry) => {
              return getGenericContent(entry);
            })
          }
        </>
      )
    }

    return null;
  };

  return entires.map(entry => getGenericContent(entry));
};
