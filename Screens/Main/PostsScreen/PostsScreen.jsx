import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsListScreen from '../../Nested/PostsListScreen/PostsListScreen';
import CommentsScreen from '../../Nested/CommentsScreen/CommentsScreen';
import MapScreen from '../../Nested/MapScreen/MapScreen';
import LogoutBtn from '../../../Components/LogoutBtn';
import { colors, fonts } from '../../../utils/styles';
import BackBtn from '../../../Components/BackBtn';

const PostsStack = createNativeStackNavigator();

const PostsScreen = () => {
  const screenOptions = {
    headerStyle: {
      borderBottomWidth: 1,
      borderColor: colors.headerBorder,
      // height: 44, // not working
      // headerHeight: 44, // not working
    },
    headerTitleAlign: 'center',
    headerTintColor: colors.mainText,
    headerTitleStyle: { fontWeight: 'Medium', fontSize: 17, fontFamily: fonts.robo5 },
    // tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarStyle: {
      paddingHorizontal: 66,
      paddingTop: 9,
      paddingBottom: 9,
      height: 68,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <PostsStack.Navigator screenOptions={screenOptions}>
        <PostsStack.Screen
          name="Публікації"
          component={PostsListScreen}
          options={{ headerRight: LogoutBtn }}
        />
        <PostsStack.Screen name="Мапа" component={MapScreen} options={{ headerLeft: BackBtn }} />
        <PostsStack.Screen
          name="Коментарі"
          component={CommentsScreen}
          options={{ headerLeft: BackBtn }}
        />
      </PostsStack.Navigator>
    </View>
  );
};

export default PostsScreen;
