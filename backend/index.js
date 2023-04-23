import express from "express";
import fs from "fs";
import cors from "cors";

let rawdata = fs.readFileSync("tweets_db.json");
let tweetsDb = JSON.parse(rawdata);

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tweets", (req, res) => {
  console.log("Tweets called");
  res.send(tweetsDb.tweets);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
