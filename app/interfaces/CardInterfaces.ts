import mongoose from "mongoose";

export interface UserInterface {
  _id: mongoose.Types.ObjectId;
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
  _id: mongoose.Types.ObjectId;
  name: string;
  status?: string;
  tag: string;
  progress?: ProgressInterface;
  tracking?: TrackingInterface;
}

export interface CardNodeInterface {
  _id: mongoose.Types.ObjectId;
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
  _id: mongoose.Types.ObjectId;
  name: string;
  progress?: ProgressInterface;
  nodes?: CardNodeInterface[];
}

export interface CardInterface {
  _id: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  tag?: string;
  progress?: ProgressInterface;
  image?: string;
  groups?: CardGroupInterface[];
}
