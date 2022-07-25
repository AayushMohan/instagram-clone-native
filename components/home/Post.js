import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Divider from "rn-dividers";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View>
    <View>
      <Image />
      <Text></Text>
    </View>
  </View>
);

export default Post;

const styles = StyleSheet.create({});
