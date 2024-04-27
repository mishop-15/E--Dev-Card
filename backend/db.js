const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MongoDB_URI);

const inputSchema = mongoose.Schema({
  title: String,
  description: String,
  linkedin: String,
  twitter: String,
  interests: [String],
});

const Card = mongoose.model("Card", inputSchema);

module.exports = { Card };
