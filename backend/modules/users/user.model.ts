import { Document, Schema, model, Model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
}

interface IUserDocument extends IUser, Document {}

interface UserModel extends Model<IUser> {
  findByCredentials(email: string, password: string): Promise<IUserDocument>;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.findByCredentials = async function (
  email: string,
  password: string
): Promise<IUserDocument> {
  const user: IUserDocument | null = await User.findOne(
    { email },
    { select: "+password" }
  );
  if (!user || (await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return user;
};

const User = model("User", userSchema);
export default User;
