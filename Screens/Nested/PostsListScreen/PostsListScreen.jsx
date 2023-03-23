import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PostItem from './PostItem';

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
];

const PostsListScreen = ({ route }) => {
  const [posts, setPosts] = useState(testData);

  useEffect(() => {
    setPosts(prevPosts => [...prevPosts, route.params]);
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      <Text>HELLO</Text>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => {
          return <PostItem postData={item} />;
        }}
      />
    </View>
  );
};

export default PostsListScreen;
