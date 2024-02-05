require("dotenv").config();
import { createServer } from "http";
import express from "express";
import { socketServer } from "./socket";
import { connectDB } from "./db/connectDB";
import authRoute from "./modules/auth/auth.route";

const app = express();

app.use(express.json());

// Routes
app.use("/auth", authRoute);

const server = createServer(app);

socketServer(server);

const PORT = process.env.PORT;
const start = async () => {
  try {
    await connectDB();
    server.listen(4000, () => {
      console.log("Server Up and Running");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
