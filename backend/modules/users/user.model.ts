import { Document, Schema, model, Model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  fullName: string;
  username: string;
  password: string;
  gender: string;
  profilePic?: string;
}

interface IUserDocument extends IUser, Document {}

interface UserModel extends Model<IUser> {
  findByCredentials(email: string, password: string): Promise<IUserDocument>;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: [true, "First name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
      minlength: 6,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
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

const User = model<IUser, UserModel>("User", userSchema);
export default User;
