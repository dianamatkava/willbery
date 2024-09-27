import mongoose, { Schema, Document } from "mongoose";

const LinkSchema = new Schema({
  url: { type: String, required: true },
  image: { type: String, required: true },
});

const ProgressSchema = new Schema({
  totalUnits: { type: Number, required: true },
  completedUnits: { type: Number, required: true },
});

const TrackingSchema = new Schema({
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  deadline: { type: Date },
  trackTime: { type: Boolean, required: true },
  duration: { type: Number, required: true },
  frequency: { type: Number, required: true },
  frequencyType: { type: String, required: true },
  totalDuration: { type: Number, required: true },
});

const CardLeafSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: String },
  tag: { type: mongoose.Schema.Types.ObjectId, required: true },
  progress: { type: ProgressSchema, required: true },
  tracking: { type: TrackingSchema, required: true },
});

const CardNodeSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  source: { type: String },
  technology: { type: String },
  tag: { type: mongoose.Schema.Types.ObjectId, required: true },
  progress: { type: ProgressSchema, required: true },
  tracking: { type: TrackingSchema, required: true },
  link: { type: LinkSchema },
  leafs: [CardLeafSchema],
});

const CardGroupSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  progress: { type: ProgressSchema, required: true },
  nodes: [CardNodeSchema],
});

const CardSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: mongoose.Schema.Types.ObjectId, required: true },
  progress: { type: ProgressSchema, required: true },
  image: { type: String, required: true },
  groups: [CardGroupSchema],
});

const CardModel = mongoose.model<Document>("Card", CardSchema);

export default CardModel;
