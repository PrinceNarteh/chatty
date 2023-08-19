import { Schema, model } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage?: string;
}

const userSchema = new Schema<IUser>({
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
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "password is rq"],
  },
  profileImage: {
    type: String,
  },
});

export default model<IUser>("User", userSchema);
