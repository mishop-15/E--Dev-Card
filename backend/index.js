const express = require("express");
const { Card } = require("./db");
const app = express();
const cors = require("cors");

const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/addCard", async function (req, res) {
  const input = req.body;
  await Card.create(input);
  res.status(200).json({
    msg: "Added Card successfully!",
  });
});

app.get("/cards", async function (req, res) {
  let cards = await Card.find({});
  res.status(200).json({ cards: cards });
});

app.use((err, req, res, next) => {
  req.status(404).json({
    err: "Something up with server",
  });
});

app.listen(port, function (req, res) {
  console.log(`Listening on port ${port}`);
});
