export interface ListEntry {
  type: 'list';
  items: string[];
}

export interface TableEntry {
  type: 'table';
  caption?: string;
  columnLabels: string[];
  rows: string[][];
}

export interface TitledEntry {
  type: "titledentry";
  entries: Entry[];
  level: number;
  name: string;
}

export type Entry = ListEntry | TableEntry | TitledEntry | string;

export type Entries  = Entry[];
