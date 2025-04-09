// components/TweetForm.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TweetForm = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("发布内容：", content);
    setContent("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="写点什么吧..."
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="发布" onPress={handlePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 6,
    textAlignVertical: "top",
  },
});

export default TweetForm;
