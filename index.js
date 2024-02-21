import express from "express";
import "dotenv/config";
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
