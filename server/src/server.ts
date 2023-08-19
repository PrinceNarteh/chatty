import express from "express";
import { createServer } from "http";
import socketServer from "./socketServer";
import cors from "cors";

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Chatty App Api");
});

const server = createServer(app);

socketServer(server);

server.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
