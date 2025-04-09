import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // 假设我们直接从后端获取用户信息和推文
    axios
      .get("http://localhost:5000/api/users/CChao") // 假设我们有一个接口获取用户信息
      .then((response) => setUser(response.data));
    // ProfilePage.js 中的 useEffect 部分

    axios
      .get("http://localhost:5000/api/tweets/CChao/tweets")
      .then((response) => setTweets(response.data))
      .catch((error) => console.error("Error fetching tweets:", error));

    axios
      .get("http://localhost:5000/api/tweets?user=CChao") // 获取该用户的推文
      .then((response) => setTweets(response.data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatar || "default-avatar.png" }}
        />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      <FlatList
        data={tweets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.tweet}>
            <Text style={styles.tweetText}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
  },
  tweet: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
  },
  tweetText: {
    fontSize: 16,
  },
});

export default ProfilePage;
