// components/TweetList.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const mockTweets = [
  { id: "1", content: "欢迎来到 CChao 的社交 App！" },
  { id: "2", content: "这是第二条推文，未来会从数据库加载哦。" },
];

const TweetList = () => {
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  return (
    <FlatList
      data={mockTweets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.tweet}>
          <Text style={styles.text}>{item.content}</Text>
          <TouchableOpacity
            onPress={() => handleLike(item.id)}
            style={styles.likeButton}
          >
            <Text style={styles.likeText}>点赞 ({likes[item.id] || 0})</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tweet: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
  },
  likeButton: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#007bff",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  likeText: {
    color: "white",
  },
});

export default TweetList;
