import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const FormDataStructure = new Schema(
  {
    AuthorBy: { type: Schema.Types.ObjectId, ref: "Account" },
    UserName: { type: String },
    DateOfBirth: { type: String },
    Mobile: { type: Number },
    PrimaryMobile: { type: Number },
    Address: { type: String },
    Baptism: { type: Boolean },
    ProfilePicture: { type: String },
  },
  { timestamps: true }
);

export const FormModel =
  models.FormData || model("FormData", FormDataStructure);
