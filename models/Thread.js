const mongoose = require("mongoose");

// データ構造を定義
const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Thread", ThreadSchema);
