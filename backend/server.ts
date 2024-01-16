import { createServer } from "http";
import express from "express";
require("dotenv").config();
import { socketServer } from "./socket";
import { connectDB } from "./db/connectDB";

const app = express();

app.use(express.json());

const server = createServer(app);

socketServer(server);

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
