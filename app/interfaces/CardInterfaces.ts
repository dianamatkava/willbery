export interface UserInterface {
  _id: string;
  name: string;
  email: string;
  tags: TagInterface[];
  domains: DomainInterface[];
}

export interface TagInterface {
  name: string;
}

export interface DomainInterface {
  name: string;
}

export interface LinkInterface {
  url: string;
  image: string;
}

export interface ProgressInterface {
  totalUnits: number;
  completedUnits: number;
}

export interface TrackingInterface {
  description: string;
  startDate: Date;
  deadline: Date;
  trackTime: boolean;
  duration?: number;
  frequency?: number;
  frequencyType?: string;
  totalDuration?: number;
}

export interface CardLeafInterface {
  id: string;
  name: string;
  status?: string;
  tag: string;
  progress?: ProgressInterface;
  tracking?: TrackingInterface;
}

export interface CardNodeInterface {
  id: string;
  name: string;
  source?: string;
  technology?: string;
  tag?: string;
  progress?: ProgressInterface;
  tracking?: TrackingInterface;
  link?: LinkInterface;
  leafs?: CardLeafInterface[];
}

export interface CardGroupInterface {
  id: string;
  name: string;
  progress?: ProgressInterface;
  nodes?: CardNodeInterface[];
}

export interface CardInterface {
  id: string;
  name: string;
  description?: string;
  tag?: string;
  progress?: ProgressInterface;
  image?: string;
  groups?: CardGroupInterface[];
}
