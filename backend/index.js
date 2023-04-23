import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

let rawdata = fs.readFileSync("tweets_db.json");
let tweetsDb = JSON.parse(rawdata);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tweets", (req, res) => {
  console.log("Tweets called");
  res.status(200).send(tweetsDb.tweets);
});

app.post("/tweet", (req, res) => {
  let data = req.body;
  const newTweet = {
    text: data.tweet,
    user: {
      name: "Me",
      screen_name: "me",
    },
  };
  tweetsDb.tweets.push(newTweet);
  res.status(200).send(newTweet);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
