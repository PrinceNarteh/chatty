import { createServer } from "http";
import express from "express";
import { socketServer } from "./socket";

const app = express();

app.use(express.json());

const server = createServer(app);

socketServer(server);

const start = async () => {
  try {
    server.listen(4000, () => {
      console.log("Server Up and Running");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
