import { Tweet } from '../components/Tweet'
import {useState, useEffect} from 'react'

export default function Index() {
    const [tweets, setTweets] = useState([]);

    async function fetchTweets() {
        const response = await fetch("http://localhost:8080/tweets", {
            method: "GET",
        });
        return await response.json();
    }

    useEffect(() => {
        fetchTweets().then((data) => setTweets(data))
    }
    , []);

    return <div>{tweets.map((tweet, i) => (
        <Tweet tweet={tweet.text} key={i} />
    ))}</div>
}