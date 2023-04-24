import { Tweet } from "../../components/Tweet";
import TweetPost from "../../components/TweetPost";
import { useState, useEffect } from "react";

export default function Index() {
  const [tweets, setTweets] = useState([]);

  async function fetchTweets() {
    const response = await fetch("http://localhost:8080/tweets/me", {
      method: "GET",
    });
    return await response.json();
  }

  useEffect(() => {
    fetchTweets().then((data) => setTweets(data));
  }, []);

  return (
      <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 my-3 mx-auto d-flex flex-column gap-4">
        <TweetPost />
        {tweets.map((tweet, i) => (
          <Tweet user={tweet.user} img={tweet.img} tweet={tweet.text} createdAt={tweet.created_at} key={i} />
        ))}
      </div>
  );
}
