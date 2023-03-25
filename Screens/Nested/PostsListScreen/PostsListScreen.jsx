import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { listStyles } from './Posts.styles';

const testAva =
  'https://c.wallhere.com/photos/3e/9f/1920x1200_px_camera_Lens_light_People_photographer_Silhouette_sunrise-1717871.jpg!s';
const testData = [
  {
    photoUri:
      'https://c.wallhere.com/photos/a9/35/mountains_lakes_lowlands_shadows_sky-650015.jpg!d',
    title: 'Mountains',
    location: 'Canada',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/a7/eb/1920x1080_px_building_car_Champs_lys_es_city_Cityscape_clouds_France-549116.jpg!d',
    title: 'City',
    location: 'Paris',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/bf/67/lake_colorado_stones_log_water_mountains-1102992.jpg!d',
    title: 'Lake',
    location: 'Colorado',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/3c/59/mountains_nature_landscape_sky-186557.jpg!d',
    title: 'Mountains',
    location: 'Alps',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/6e/ec/bridge_water_road_car-16111.jpg!s',
    title: 'Mountains',
    location: 'Canada',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/09/dd/2003x3000_px_nature_road_Trees-845995.jpg!s',
    title: 'City',
    location: 'Paris',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/35/e5/1920x1200_px_Bay-1232117.jpg!s',
    title: 'Lake',
    location: 'Colorado',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/0a/b1/2560x1600_px_bridge_clouds_forest_landscape_nature_sky_water-1002278.jpg!s',
    location: 'Alps',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/40/4a/2559x1571_px_Fall_landscape_nature_photography_plants_Stones_sunset-1039859.jpg!s',
    title: 'Mountains',
    location: 'Alps',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/a9/35/mountains_lakes_lowlands_shadows_sky-650015.jpg!d',
    title: 'Mountains',
    location: 'Canada',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/a7/eb/1920x1080_px_building_car_Champs_lys_es_city_Cityscape_clouds_France-549116.jpg!d',
    title: 'City',
    location: 'Paris',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/bf/67/lake_colorado_stones_log_water_mountains-1102992.jpg!d',
    title: 'Lake',
    location: 'Colorado',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/3c/59/mountains_nature_landscape_sky-186557.jpg!d',
    title: 'Mountains',
    location: 'Alps',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/6e/ec/bridge_water_road_car-16111.jpg!s',
    title: 'Mountains',
    location: 'Canada',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/09/dd/2003x3000_px_nature_road_Trees-845995.jpg!s',
    title: 'City',
    location: 'Paris',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri: 'https://c.wallhere.com/photos/35/e5/1920x1200_px_Bay-1232117.jpg!s',
    title: 'Lake',
    location: 'Colorado',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/0a/b1/2560x1600_px_bridge_clouds_forest_landscape_nature_sky_water-1002278.jpg!s',
    location: 'Alps',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
  {
    photoUri:
      'https://c.wallhere.com/photos/40/4a/2559x1571_px_Fall_landscape_nature_photography_plants_Stones_sunset-1039859.jpg!s',
    title: 'Mountains',
    location: 'Alps',
    coordinates: {
      lat: 56.863335,
      lon: -123.6383021,
    },
  },
];

const PostsListScreen = ({ route }) => {
  const [posts, setPosts] = useState(testData);
  const { nickname, email } = useSelector(state => state.auth);

  useEffect(() => {
    setPosts(prevPosts => [route.params, ...prevPosts]);
  }, [route.params]);

  return (
    <View style={listStyles.container}>
      <View style={listStyles.userBox}>
        <Image source={{ uri: testAva }} style={listStyles.userAva} />

        <View style={listStyles.userDetails}>
          <Text style={listStyles.userName}>{nickname}</Text>

          <Text style={listStyles.userMail}>{email}</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <PostItem postData={item} />}
      />
    </View>
  );
};

export default PostsListScreen;
