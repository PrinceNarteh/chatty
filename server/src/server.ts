import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Chatty App Api");
});

app.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
