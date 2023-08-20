import { Schema, model } from "mongoose";
import { z } from "zod";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage?: string;
  status: string;
  newMessages: object;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "email is required"],
      index: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "password is rq"],
    },
    profileImage: {
      type: String,
    },
    status: {
      type: String,
      default: "onine",
    },
    newMessages: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const User = model<IUser>("User", userSchema);
export default User;
