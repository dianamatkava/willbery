import mongoose, { Schema, Document } from "mongoose";

const ScoupeSchema = new Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const ScopeModel = mongoose.model<Document>("ScopeModel", ScoupeSchema);

export default ScopeModel;
