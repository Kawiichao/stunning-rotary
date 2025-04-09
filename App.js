// App.js
import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TweetForm />
        <ProfilePage />
        <TweetList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16,
  },
});
