import { createServer } from "http";
import express from "express";

const app = express();

app.use(express.json());

const server = createServer(app);

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
