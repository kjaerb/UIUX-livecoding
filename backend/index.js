import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

const path = "tweets_db.json";

let rawdata = fs.readFileSync(path);
let tweetsDb = JSON.parse(rawdata);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tweets", (req, res) => {
  console.log("/Tweets called");
  const result = tweetsDb.tweets;
  res.status(200).send(result);
});

app.get("/tweets/:user", (req, res) => {
  console.log("/tweets/:user called");
  const user = req.params.user;
  const result = tweetsDb.tweets.filter((tweet) => tweet.user.screen_name === user).sort(sortByDate);
  res.status(200).send(result);
});

app.post("/tweet", (req, res) => {
  console.log("Posting tweet");
  const data = req.body;

  const newTweet = {
    user: {
      name: "Me",
      screen_name: "me",
    },
    text: data.tweet,
    img: `https://unsplash.it/1280/720?image=${Math.floor(
      Math.random() * 1000
    )}`,
    created_at: new Date().toISOString(),
  };

  tweetsDb.tweets.unshift(newTweet);

  fs.writeFileSync(path, JSON.stringify(tweetsDb, null, 2), (err) => {
    if (err) res.status(500).send(err);
  });

  res.status(200).send(tweetsDb);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

function sortByDate(a, b) {
  return new Date(b.created_at) - new Date(a.created_at);
}