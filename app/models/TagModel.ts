import mongoose, { Schema, Document } from "mongoose";

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const TagModel = mongoose.model<Document>("TagModel", TagSchema);

export default TagModel;
