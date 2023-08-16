import express from "express";
import { createServer } from "http";
import socketServer from "./socketServer";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Chatty App Api");
});

const server = createServer(app);

socketServer(server);

server.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
