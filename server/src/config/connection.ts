import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017", {
      dbName: "chatty-app",
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Unable to connect to database");
    process.exit(1);
  }
};
