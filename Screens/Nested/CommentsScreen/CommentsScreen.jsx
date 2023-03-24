import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import { pageStyles } from './CommentsScreen.styles';
import CommentItem from './CommentItem';

const testData = [
  {
    isOwner: false,
    avaURI:
      'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s',
    commentText:
      'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
    commentDate: '',
  },
  {
    isOwner: true,
    avaURI:
      'https://c.wallhere.com/photos/3e/9f/1920x1200_px_camera_Lens_light_People_photographer_Silhouette_sunrise-1717871.jpg!s',
    commentText:
      'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
    commentDate: '',
  },
  {
    isOwner: false,
    avaURI:
      'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s',
    commentText: 'Thank you! That was very helpful!',
    commentDate: '',
  },
];

const CommentsScreen = ({ route }) => {
  const { photoUri } = route.params;
  const [commentsData, setCommentsData] = useState(testData);

  return (
    <View style={pageStyles.container}>
      <Image style={pageStyles.image} source={{ uri: photoUri }} />

      <FlatList
        data={commentsData}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <CommentItem commentData={item} />}
      />

      <View>
        <TextInput />

        <TouchableOpacity>
          <Text>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
