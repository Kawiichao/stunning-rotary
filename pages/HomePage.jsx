import React, { useEffect, useState } from "react";
import axios from "axios";
import TweetItem from "../components/TweetItem";

function HomePage() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      const res = await axios.get("/api/tweets");
      setTweets(res.data);
    }
    fetchTweets();
  }, []);

  return (
    <div>
      <h1>首页</h1>
      {tweets.map((tweet) => (
        <TweetItem key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
}

export default HomePage;
