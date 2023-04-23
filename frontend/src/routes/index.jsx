import { Tweet } from "../components/Tweet";
import { useState, useEffect } from "react";

export default function Index() {
  const [tweets, setTweets] = useState([]);

  async function fetchTweets() {
    const response = await fetch("http://localhost:8080/tweets", {
      method: "GET",
    });
    return await response.json();
  }

  useEffect(() => {
    fetchTweets().then((data) => setTweets(data));
  }, []);

  return (
    <div className="col-10 col-md-6 my-3 mx-auto d-flex flex-column gap-4">
      {tweets.map((tweet, i) => (
        <Tweet user={tweet.user} tweet={tweet.text} key={i} />
      ))}
    </div>
  );
}
