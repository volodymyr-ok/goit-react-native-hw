import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { itemStyles } from './Posts.styles';
import { EvilIcons, Feather } from '@expo/vector-icons';

const PostItem = ({ postData }) => {
  if (!postData) return;
  const [post] = useState(postData);
  const { photoUri, title, location, coordinates: coords } = post;

  const navigation = useNavigation();
  const navigateToMap = () => navigation.navigate('Мапа', { coords });
  const navigateToComments = () => navigation.navigate('Коментарі', { photoUri });

  return (
    <View style={itemStyles.container}>
      <Image style={itemStyles.image} source={{ uri: photoUri }} />

      <Text style={itemStyles.title}>{title ? title : 'Photo'}</Text>

      <View style={itemStyles.details}>
        <TouchableOpacity onPress={navigateToComments} style={itemStyles.btnContainer}>
          <EvilIcons name="comment" size={18} style={itemStyles.commentsIcon} />
          <Text style={itemStyles.commentsTotal}>{Math.floor(Math.random() * 50)}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToMap} style={itemStyles.btnContainer}>
          <Feather name="map-pin" size={18} style={itemStyles.locationIcon} />
          <Text style={itemStyles.locationName}>{location ? location : 'Location'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItem;
