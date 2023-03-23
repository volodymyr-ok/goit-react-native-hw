import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostItem = ({ postData }) => {
  if (!postData) return;
  const { photoUri, title, location, coordinates } = postData;

  const navigation = useNavigation();
  const navigateToMap = () => navigation.navigate('Мапа', { coordinates });
  const navigateToComments = () => navigation.navigate('Коментарі', { photoUri });

  return (
    <View style={{ marginBottom: 10, height: 300, width: 350 }}>
      <View>
        <Image style={{ height: 200, width: 350 }} source={{ uri: photoUri }} />
      </View>

      <Text>{title ? title : 'Photo'}</Text>

      <View>
        <TouchableOpacity onPress={navigateToComments}>
          <Text>COMENTS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToMap}>
          <Text>{location ? location : 'Location'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItem;
