import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsListScreen from '../../Nested/PostsListScreen/PostsListScreen';
import CommentsScreen from '../../Nested/CommentsScreen/CommentsScreen';
import MapScreen from '../../Nested/MapScreen/MapScreen';

const PostsStack = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <PostsStack.Navigator>
        <PostsStack.Screen name="Публікації" component={PostsListScreen} />
        <PostsStack.Screen name="Мапа" component={MapScreen} />
        <PostsStack.Screen name="Коментарі" component={CommentsScreen} />
      </PostsStack.Navigator>
    </View>
  );
};

export default PostsScreen;
