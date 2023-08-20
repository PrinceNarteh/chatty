import { Document, Model, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { z } from "zod";

// user interface
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
  status: "online" | "offline";
  newMessages: object;
}

// user document
interface IUserDocument extends IUser, Document {}

// user model

interface UserModel extends Model<IUser> {
  findByCredentials: (
    email: string,
    password: string
  ) => Promise<IUserDocument>;
}

const userSchema = new Schema<IUser, UserModel>(
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
      default: "online",
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
  next();
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.statics.findByCredentials = async function (
  email: string,
  password: string
) {
  const user: IUser | null = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return user;
};

const User = model<IUser, UserModel>("User", userSchema);
export default User;
