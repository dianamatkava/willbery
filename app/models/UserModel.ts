import mongoose, { Schema } from "mongoose";
import { UserInterface } from "~/interfaces/CardInterfaces";

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const DomainSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tags: [TagSchema],
  domains: [DomainSchema],
});

const UserModel = mongoose.model<UserInterface>("User", UserSchema);
export default UserModel;
