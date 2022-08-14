const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 3000;
const mongoose = require("mongoose");

// schemaをrequireしてデータの作成や取得ができる
const Thread = require("./models/Thread");

app.use(express.json());

app.use(express.static("public"));

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// getメソッド
app.get("/api/v1/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

// postメソッド
app.post("/api/v1/thread", async (req, res) => {
  try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, console.log("サーバーを開始します。"));
