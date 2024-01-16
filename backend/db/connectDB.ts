import { connect } from "mongoose";

const mongoURI = process.env.MONGO_URI || "";

export const connectDB = async () => {
  try {
    await connect(mongoURI);
    console.log("Database connected successfully!");
  } catch (error: any) {
    console.log("Error connecting database", error.message);
    process.exit(1);
  }
};
