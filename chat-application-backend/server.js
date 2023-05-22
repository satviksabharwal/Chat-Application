const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("App is running!!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log(`Server is up on port ${PORT} and running!!`));
