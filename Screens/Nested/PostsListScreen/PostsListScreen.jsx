import { collection, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { firestore } from '../../../firebase/config';
import PostItem from './PostItem';
import { listStyles } from './Posts.styles';
import { onSnapshot } from 'firebase/firestore';

const PostsListScreen = () => {
  const [posts, setPosts] = useState([]);
  const { nickname, email, avatar } = useSelector(state => state.auth);

  useEffect(() => {
    (async () => {
      const allPostsRef = collection(firestore, 'posts');
      const sortedPosts = query(allPostsRef, orderBy('createdAt'));
      onSnapshot(sortedPosts, data =>
        setPosts(data.docs.map(post => ({ ...post.data(), postId: post.id })))
      );
    })();
  }, []);

  return (
    <View style={listStyles.container}>
      <View style={listStyles.userBox}>
        <View style={listStyles.avatarWrap}>
          {avatar && <Image source={{ uri: avatar }} style={listStyles.userAva} />}
        </View>

        <View style={listStyles.userDetails}>
          <Text style={listStyles.userName}>{nickname}</Text>

          <Text style={listStyles.userMail}>{email}</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${item.postId}_${index}`}
        renderItem={({ item }) => <PostItem postData={{ ...item }} />}
      />
    </View>
  );
};

export default PostsListScreen;

// const testData = [
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/a9/35/mountains_lakes_lowlands_shadows_sky-650015.jpg!d',
//     title: 'Mountains',
//     location: 'Canada',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/a7/eb/1920x1080_px_building_car_Champs_lys_es_city_Cityscape_clouds_France-549116.jpg!d',
//     title: 'City',
//     location: 'Paris',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/bf/67/lake_colorado_stones_log_water_mountains-1102992.jpg!d',
//     title: 'Lake',
//     location: 'Colorado',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/3c/59/mountains_nature_landscape_sky-186557.jpg!d',
//     title: 'Mountains',
//     location: 'Alps',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/6e/ec/bridge_water_road_car-16111.jpg!s',
//     title: 'Mountains',
//     location: 'Canada',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/09/dd/2003x3000_px_nature_road_Trees-845995.jpg!s',
//     title: 'City',
//     location: 'Paris',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/35/e5/1920x1200_px_Bay-1232117.jpg!s',
//     title: 'Lake',
//     location: 'Colorado',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/0a/b1/2560x1600_px_bridge_clouds_forest_landscape_nature_sky_water-1002278.jpg!s',
//     location: 'Alps',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/40/4a/2559x1571_px_Fall_landscape_nature_photography_plants_Stones_sunset-1039859.jpg!s',
//     title: 'Mountains',
//     location: 'Alps',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/a9/35/mountains_lakes_lowlands_shadows_sky-650015.jpg!d',
//     title: 'Mountains',
//     location: 'Canada',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/a7/eb/1920x1080_px_building_car_Champs_lys_es_city_Cityscape_clouds_France-549116.jpg!d',
//     title: 'City',
//     location: 'Paris',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/bf/67/lake_colorado_stones_log_water_mountains-1102992.jpg!d',
//     title: 'Lake',
//     location: 'Colorado',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/3c/59/mountains_nature_landscape_sky-186557.jpg!d',
//     title: 'Mountains',
//     location: 'Alps',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/6e/ec/bridge_water_road_car-16111.jpg!s',
//     title: 'Mountains',
//     location: 'Canada',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/09/dd/2003x3000_px_nature_road_Trees-845995.jpg!s',
//     title: 'City',
//     location: 'Paris',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri: 'https://c.wallhere.com/photos/35/e5/1920x1200_px_Bay-1232117.jpg!s',
//     title: 'Lake',
//     location: 'Colorado',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/0a/b1/2560x1600_px_bridge_clouds_forest_landscape_nature_sky_water-1002278.jpg!s',
//     location: 'Alps',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
//   {
//     photoUri:
//       'https://c.wallhere.com/photos/40/4a/2559x1571_px_Fall_landscape_nature_photography_plants_Stones_sunset-1039859.jpg!s',
//     title: 'Mountains',
//     location: 'Alps',
//     coordinates: {
//       lat: 56.863335,
//       lon: -123.6383021,
//     },
//   },
// ];
