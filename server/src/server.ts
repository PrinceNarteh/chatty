import express from "express";
import { createServer } from "http";
import socketServer from "./socketServer";
import cors from "cors";
import { connectDB } from "./config/connection";
import authRouter from "./modules/auth/auth.route";

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Chatty App Api");
});

app.use("/auth", authRouter);

const server = createServer(app);

socketServer(server);

async function start() {
  try {
    await connectDB();
    server.listen(4000, () => {
      console.log(`Server running on http://localhost:4000`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
