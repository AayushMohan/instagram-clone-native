import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <Image source={{ uri: story.image }} style={styles.story} />
        ))}
      </ScrollView>
      <Text style={{ color: "white" }}>Stories</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 3,
    borderColor: "#F56040",
  },
});
