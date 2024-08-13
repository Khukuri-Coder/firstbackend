require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello this is my first server");
});

app.get("/facebook", (req, res) => {
  res.send("Here is my Facebook Profile");
});

app.get("/twitter", (req, res) => {
  res.send("Here is my Twitter Profile");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening to ${port}`);
});
