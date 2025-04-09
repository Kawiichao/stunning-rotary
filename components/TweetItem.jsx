import React, { useState } from "react";
import axios from "axios";

function TweetItem({ tweet }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(tweet.comments || []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`/api/tweets/${tweet._id}/comments`, {
      text: commentText,
      user: "测试用户",
    });
    setComments(response.data.comments);
    setCommentText("");
  };

  return (
    <div>
      <p>{tweet.content}</p>

      {/* 评论列表 */}
      <div>
        <strong>评论：</strong>
        {comments.map((c, i) => (
          <p key={i}>
            {c.user}: {c.text}
          </p>
        ))}
      </div>

      {/* 评论输入框 */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="写评论"
        />
        <button type="submit">评论</button>
      </form>
    </div>
  );
}

export default TweetItem;
