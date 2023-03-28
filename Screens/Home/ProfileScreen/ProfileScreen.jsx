import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { firestore } from '../../../firebase/config';
import { styles } from './ProfileScreen.styles';
import PostItem from '../../Nested/PostsListScreen/PostItem';
import { authSignOut } from '../../../redux/auth/authOperations';

const BgImage = require('../../../assets/img/BgPhoto.jpg');

const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const { nickname, userId, avatar } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    const allPostsRef = collection(firestore, 'posts');
    const q = query(allPostsRef, where('userId', '==', userId));

    await onSnapshot(q, data => {
      setPosts(data.docs.map(item => ({ ...item.data(), id: item.id })));
    });
  };

  return (
    <ImageBackground style={styles.image} source={BgImage}>
      <View style={styles.view}>
        <View style={styles.photoBox}>
          {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
          {/* <TouchableOpacity style={styles.addPhoto}>
            {!avatar ? (
              <AntDesign name="pluscircleo" size={24} color={colors.mainAccent} />
            ) : (
              <AntDesign name="closecircleo" size={24} color={colors.placeholder} />
            )}
          </TouchableOpacity> */}
        </View>

        <TouchableOpacity onPress={() => dispatch(authSignOut())} style={styles.logout}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>{nickname}</Text>
        <FlatList
          style={{ paddingHorizontal: 16, marginTop: 32 }}
          data={posts}
          renderItem={({ item }) => <PostItem postData={item} navigation={navigation} />}
          keyExtractor={() => Math.random().toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
