import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CommentsScreen = ({ route }) => {
  console.log('file: CommentsScreen.jsx:5 ~ route >>', route);
  const { photoUri } = route.params;

  return (
    <View style={{ marginBottom: 10, height: 300, width: 350 }}>
      <View>
        <Image style={{ height: 200, width: 350 }} source={{ uri: photoUri }} />
      </View>

      <View>
        <TouchableOpacity>
          <Text>TEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
