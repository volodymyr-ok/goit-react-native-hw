import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import PostItem from './PostItem/PostItem';

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // if (!route.params) return;
    setPosts(prevPosts => [...prevPosts, route.params]);
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          return <PostItem item={item} />;
        }}
      />
    </View>
  );
};

export default PostsScreen;
