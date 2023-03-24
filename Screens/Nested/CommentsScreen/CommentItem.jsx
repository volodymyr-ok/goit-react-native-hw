import React from 'react';
import { Text, View } from 'react-native';

const CommentItem = ({ commentData }) => {
  const { commentText } = commentData;
  return (
    <View>
      <Text>{commentText}</Text>
    </View>
  );
};

export default CommentItem;
