import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import axios from "axios";

const CommentForm = ({ tweetId, onCommentPosted }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!comment.trim()) return;
    await axios.post(`http://localhost:5000/api/tweets/${tweetId}/comments`, {
      comment,
    });
    setComment("");
    if (onCommentPosted) onCommentPosted();
  };

  return (
    <View>
      <TextInput
        placeholder="Write a comment..."
        value={comment}
        onChangeText={setComment}
        style={{ borderColor: "gray", borderWidth: 1, marginBottom: 5 }}
      />
      <Button title="Comment" onPress={handleSubmit} />
    </View>
  );
};

export default CommentForm;
