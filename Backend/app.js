import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { chats } from "./data/data.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});

export default app;
