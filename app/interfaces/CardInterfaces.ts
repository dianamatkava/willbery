export interface CardLeafInterface {
  id: number;
  name: string;
  tag: string;
}

export interface CardNodesInterface {
  id: number;
  name: string;
  tag: string;
  leafs: CardLeafInterface[];
}

export interface CardGroupsInterface {
  id: number;
  name: string;
  tag: string;
  nodes: CardNodesInterface[];
}

export interface CardInterface {
  id: number;
  tag: string;
  name: string;
  description: string;
  groups: CardGroupsInterface[];
}
