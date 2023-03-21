import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { colors, fonts } from '../../../utils/styles';

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
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

  const BackBtn = () => {
    // backBehavior="history"
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Публікації')} style={styles.backBtn}>
        <AntDesign name="arrowleft" size={24} color={colors.nonAccent} />
      </TouchableOpacity>
    );
  };

  const LogoutBtn = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logoutBtn}>
        <Feather name="log-out" size={24} color={colors.logoutBtn} />
      </TouchableOpacity>
    );
  };

  const TabButton = (focused, name) => {
    const btnStyles = {
      ...styles.tabBtn,
      backgroundColor: focused ? colors.mainAccent : 'transparent',
    };
    const iconColor = focused ? colors.submitText : colors.nonAccent;
    return (
      <View style={btnStyles}>
        {name === 'Posts' && <Ionicons name="grid-outline" size={24} color={iconColor} />}
        {name === 'Create' && <AntDesign name="plus" size={24} color={iconColor} />}
        {name === 'Profile' && <Feather name="user" size={24} color={iconColor} />}
      </View>
    );
  };

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => TabButton(focused, 'Posts'),
          headerRight: LogoutBtn,
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => TabButton(focused, 'Create'),
          tabBarStyle: { display: 'none' },
          headerLeft: BackBtn,
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

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 16,
    height: '100%',
    justifyContent: 'center',
  },
  logoutBtn: {
    marginRight: 16,
    height: 44,
    justifyContent: 'center',
  },
  tabBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default Home;
