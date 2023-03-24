import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { colors, fonts } from '../../../utils/styles';
import BackBtn from '../../../Components/BackBtn';
import TabButton from '../../../Components/TabButton';

const Tabs = createBottomTabNavigator();

const Home = () => {
  const screenOptions = {
    headerStyle: {
      borderBottomWidth: 1,
      borderColor: colors.headerBorder,
    },
    headerTitleAlign: 'center',
    headerTintColor: colors.mainText,
    headerTitleStyle: { fontWeight: '500', fontSize: 17, fontFamily: fonts.robo5 },
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
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => TabButton(focused, 'Posts'),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => TabButton(focused, 'Create'),
          tabBarStyle: { display: 'none' },
          headerLeft: BackBtn,
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ focused }) => TabButton(focused, 'Profile') }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
