export interface CardLeafInterface {
  id: number;
  name: string;
  tag: string;
}

export interface CardNodeInterface {
  id: number;
  name: string;
  tag: string;
  leafs: CardLeafInterface[];
}

export interface CardGroupsInterface {
  id: number;
  name: string;
  tag: string;
  nodes: CardNodeInterface[];
}

export interface CardInterface {
  id: number;
  tag: string;
  name: string;
  description: string;
  groups: CardGroupsInterface[];
}
