const express = require("express");
const app = express();
const mongoose = require("mongoose");

const r = require("./routes/index.js");
app.listen(8000, () => {
  console.log("server started");
});

app.use("/", r);

const MONGO_URI =
  "mongodb+srv://Arshdeep:A1r2s3d4e5@cluster0.441ajgx.mongodb.net/ConfrenceModules";

const db = mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connection open!!");
  })
  .catch((err) => {
    console.log(err);
  });
