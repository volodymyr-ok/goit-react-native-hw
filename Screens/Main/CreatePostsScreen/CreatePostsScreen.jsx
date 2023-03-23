import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import styles from './CreatePostsScreen.styles';
import { colors } from '../../../utils/styles';

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const [photoURI, setPhotoURI] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      // await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (!hasPermission) return <Text style={{ textAlign: 'center' }}>No access to camera</Text>;

  const takePhoto = async () => {
    if (!cameraRef) return;
    try {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhotoURI(uri);
    } catch (error) {
      console.log('file: CreatePostsScreen.jsx:32 ~ error >>', error);
    }
  };

  const handleTitleChange = value => setTitle(value);
  const handleLocationChange = value => setLocation(value);
  const handleSubmit = () => navigation.navigate('Публікації', { photoURI, title, location });
  const handleDelete = () => setPhotoURI('');

  // ---------------------------------
  const locationStyles = {
    ...styles.input,
    marginBottom: 0,
    paddingLeft: 28,
  };
  const submitStyles = {
    btn: {
      ...styles.submitBtn,
      backgroundColor: photoURI ? colors.mainAccent : colors.layoutBg,
    },
    text: {
      ...styles.submitText,
      color: photoURI ? colors.submitText : colors.placeholder,
    },
  };
  const isDeleteDisabled = photoURI ? false : true;
  // ---------------------------------

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.cameraWrap}>
          {photoURI && <Image style={styles.photo} source={{ uri: photoURI }} />}

          <Camera
            style={styles.cameraViewport}
            ref={setCameraRef}
            onCameraReady={() => console.log('Camera is ready')}
          >
            <TouchableOpacity onPress={takePhoto} style={styles.cameraBtn}>
              <FontAwesome name="camera" size={24} style={styles.cameraIcon} />
            </TouchableOpacity>
          </Camera>
        </View>

        <TouchableOpacity style={styles.chooseBtn}>
          <Text style={styles.chooseText}>Завантажити світлину</Text>
        </TouchableOpacity>

        <TextInput
          value={title}
          onChangeText={handleTitleChange}
          style={{
            ...styles.input,
            fontWeight: title ? '500' : '400',
            fontFamily: title ? styles.robo5 : styles.robo4,
          }}
          placeholder="Назва..."
          placeholderTextColor={colors.placeholder}
        />

        <View style={styles.inputWrap}>
          <TextInput
            value={location}
            onChangeText={handleLocationChange}
            style={locationStyles}
            placeholder="Місцевість..."
            placeholderTextColor={colors.placeholder}
          />
          <Feather name="map-pin" size={18} style={styles.loactionIcon} />
        </View>

        <TouchableOpacity
          style={submitStyles.btn}
          onPress={handleSubmit}
          disabled={photoURI ? false : true}
        >
          <Text style={submitStyles.text}>Опублікувати</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete} disabled={isDeleteDisabled}>
        <Feather name="trash-2" size={24} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
