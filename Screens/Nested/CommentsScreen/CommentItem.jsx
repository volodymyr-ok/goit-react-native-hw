import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { commentStyles } from './Comments.styles';

const tempUserAva =
  'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s';
const tempOwnerAva =
  'https://c.wallhere.com/photos/3e/9f/1920x1200_px_camera_Lens_light_People_photographer_Silhouette_sunrise-1717871.jpg!s';

const CommentItem = ({ commentData }) => {
  const { comment, avaURI, createdAt, avatar } = commentData;
  const { userId } = useSelector(state => state.auth);

  const isOwner = commentData.userId === userId;
  const windowWidth = Dimensions.get('window').width;

  const containerStyles = isOwner ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' };
  const avatarStyles = isOwner
    ? { marginLeft: 16, marginRight: 0 }
    : { marginLeft: 0, marginRight: 16 };
  const dateStyles = isOwner ? { textAlign: 'left' } : { textAlign: 'right' };
  const textWrapWidth = windowWidth - 32 - 28 - 16;

  // const uri = avaURI ? avaURI : isOwner ? tempOwnerAva : tempUserAva;
  const uri = avatar ? avatar : isOwner ? tempOwnerAva : tempUserAva;

  return (
    <View style={{ ...commentStyles.container, ...containerStyles }}>
      <Image source={{ uri: uri }} style={{ ...commentStyles.image, ...avatarStyles }} />

      <View style={{ ...commentStyles.textWrap, width: textWrapWidth }}>
        <Text style={commentStyles.text}>{comment}</Text>

        <Text style={{ ...commentStyles.date, ...dateStyles }}>
          {new Date(createdAt).toUTCString().slice(5, 17)} |{' '}
          {new Date(createdAt).toLocaleTimeString().slice(0, 5)}
        </Text>
      </View>
    </View>
  );
};

export default CommentItem;
