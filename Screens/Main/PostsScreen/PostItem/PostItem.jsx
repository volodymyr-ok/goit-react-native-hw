import React from 'react';
import { Image, Text, View } from 'react-native';

const PostItem = ({ item }) => {
  console.log('file: PostItem.jsx:5 ~ item >>', item);
  if (!item) return;
  return (
    <View style={{ marginBottom: 10, height: 300, width: 350 }}>
      <Text>---------------</Text>
      <Image style={{ height: 200, width: 350 }} source={{ uri: item.photoUri }} />
      <Text>{item.title}</Text>
    </View>
  );
};

export default PostItem;
