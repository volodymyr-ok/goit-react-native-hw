import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tabs = createBottomTabNavigator();

// CommentsScreen
// MapScreen

const Home = ({ navigation }) => {
  return (
    // <View style={styles.mainScreen}>
    //   <Text style={styles.mainText}>HOME</Text>

    //   <TouchableOpacity style={styles.commonBtn} onPress={() => navigation.navigate('Login')}>
    //     <Text style={styles.btnText}>LOGOUT</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.commonBtn} onPress={() => navigation.navigate('Posts')}>
    //     <Text style={styles.btnText}>Posts</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.commonBtn} onPress={() => navigation.navigate('CreatePosts')}>
    //     <Text style={styles.btnText}>CreatePosts</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.commonBtn} onPress={() => navigation.navigate('Profile')}>
    //     <Text style={styles.btnText}>Profile</Text>
    //   </TouchableOpacity>
    // </View>
    <Tabs.Navigator>
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    fontFamily: 'Orbitron',
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  commonBtn: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#28b3b6',
    borderRadius: 15,
  },
  btnText: {
    textAlign: 'center',
  },
});

export default Home;
