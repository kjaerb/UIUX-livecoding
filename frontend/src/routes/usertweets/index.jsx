import Tweet from "../../components/Tweet";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Index() {
    let { user } = useParams();
  const [tweets, setTweets] = useState([]);

  async function fetchTweets(url) {
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  }

  useEffect(() => {
    const url = "http://localhost:8080/tweets/" + user;
    fetchTweets(url).then((data) => setTweets(data));
  }, [user]);

  return (
    <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 my-3 mx-auto d-flex flex-column gap-4">
      {tweets.map((tweet, i) => (
        <Tweet
          user={tweet.user}
          img={tweet.img}
          tweet={tweet.text}
          createdAt={tweet.created_at}
          key={i}
        />
      ))}
    </div>
  );
}
