import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const AccountStructure = new Schema(
  {
    UserName: { type: String },
    Email: { type: String, unique: true },
    Password: { type: String },
    ProfilePicture:{type: String}
  },
  { timestamps: true }
);

export const AccountModels =
  models.Account || model("Account", AccountStructure);
