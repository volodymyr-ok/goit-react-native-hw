import React, { useState } from 'react';
import { Image, TouchableOpacity, View, FlatList, TextInput, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { pageStyles } from './Comments.styles';
import CommentItem from './CommentItem';
import { colors } from '../../../utils/styles';
import { firestore } from '../../../firebase/config';

const CommentsScreen = ({ route }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { userId, avatar } = useSelector(state => state.auth);
  const { imageURL, postId } = route.params;

  const allPostsRef = collection(firestore, 'posts');
  const currentPostRef = doc(allPostsRef, postId);
  const allCommentsRef = collection(currentPostRef, 'comments');

  useEffect(() => {
    onSnapshot(allCommentsRef, data =>
      setCommentsData(data.docs.map(comment => ({ ...comment.data() })))
    );
  }, []);

  const createComment = async () => {
    await addDoc(allCommentsRef, { comment: newComment, createdAt: Date.now(), userId, avatar });
    setNewComment('');
  };

  const handleSubmit = () => {
    createComment();
    Keyboard.dismiss();
  };

  const isDisabled = !newComment ? true : false;

  return (
    <View style={pageStyles.container}>
      <Image style={pageStyles.image} source={{ uri: imageURL }} />

      <FlatList
        style={{}}
        data={commentsData}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <CommentItem commentData={item} />}
      />

      <View style={pageStyles.inputWrap}>
        <TextInput
          placeholder="Коментувати..."
          placeholderTextColor={colors.placeholder}
          value={newComment}
          onChangeText={value => setNewComment(value)}
          style={pageStyles.input}
        />

        <TouchableOpacity style={pageStyles.submitBtn} onPress={handleSubmit} disabled={isDisabled}>
          <AntDesign name="arrowup" size={14} color={colors.bgContent} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;

// const testData = [
//   {
//     isOwner: false,
//     avaURI:
//       'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s',
//     commentText:
//       'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
//     commentDate: '09 июня, 2020 | 08:40',
//   },
//   {
//     isOwner: true,
//     avaURI:
//       'https://c.wallhere.com/photos/3e/9f/1920x1200_px_camera_Lens_light_People_photographer_Silhouette_sunrise-1717871.jpg!s',
//     commentText:
//       'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
//     commentDate: '09 июня, 2020 | 09:14',
//   },
//   {
//     isOwner: false,
//     avaURI:
//       'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s',
//     commentText: 'Thank you! That was very helpful!',
//     commentDate: '09 июня, 2020 | 09:20',
//   },
//   {
//     isOwner: false,
//     avaURI:
//       'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s',
//     commentText:
//       'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
//     commentDate: '09 июня, 2020 | 08:40',
//   },
//   {
//     isOwner: true,
//     avaURI:
//       'https://c.wallhere.com/photos/3e/9f/1920x1200_px_camera_Lens_light_People_photographer_Silhouette_sunrise-1717871.jpg!s',
//     commentText:
//       'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
//     commentDate: '09 июня, 2020 | 09:14',
//   },
//   {
//     isOwner: false,
//     avaURI:
//       'https://c.wallhere.com/photos/a3/6e/antonio_banderas_actor_face_jacket_shirt-1004555.jpg!s',
//     commentText: 'Thank you! That was very helpful!',
//     commentDate: '09 июня, 2020 | 09:20',
//   },
// ];
