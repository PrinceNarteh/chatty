import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI || "", {
      dbName: process.env.DB_NAME,
    });
    console.log("Database connected successfully!");
  } catch (error: any) {
    console.log("Error connecting database", error.message);
    process.exit(1);
  }
};
