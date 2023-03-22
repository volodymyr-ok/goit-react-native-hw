import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!route.params) return;
    setPosts(prevPosts => [...prevPosts, route.params]);
  }, [route.params]);

  const Item = ({ photoUri, title }) => (
    <View style={{ marginBottom: 10, height: 300, width: 350 }}>
      <Image style={{ height: 200, width: 350 }} source={{ uri: photoUri }} />
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${index}+${item.photoUri}`}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

export default PostsScreen;
