import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { itemStyles } from './Posts.styles';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../../firebase/config';
import { useEffect } from 'react';

const PostItem = ({ postData }) => {
  console.log('file: PostItem.jsx:11 ~ postData >>', postData);
  if (!postData) return;
  const [total, setTotal] = useState(0);
  const [post] = useState(postData);
  const navigation = useNavigation();
  const { imageURL, title, location, coordinates: coords, postId } = post;

  useEffect(() => {
    (async () => {
      const colRef = await collection(firestore, 'posts');
      const postRef = await doc(colRef, postId);
      const commentsRef = await collection(postRef, 'comments');
      await onSnapshot(commentsRef, data => setTotal(data.docs.length));
    })();
  }, []);

  const navigateToMap = () => navigation.navigate('Мапа', { coords });
  const navigateToComments = () => navigation.navigate('Коментарі', { imageURL, postId });

  return (
    <View style={itemStyles.container}>
      <Image style={itemStyles.image} source={{ uri: imageURL }} />

      <Text style={itemStyles.title}>{title ? title : 'Photo'}</Text>

      <View style={itemStyles.details}>
        <TouchableOpacity onPress={navigateToComments} style={itemStyles.btnContainer}>
          <EvilIcons name="comment" size={18} style={itemStyles.commentsIcon} />

          <Text style={itemStyles.commentsTotal}>{total}</Text>
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
