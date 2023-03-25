import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import styles from './CreatePostsScreen.styles';
import { colors } from '../../../utils/styles';

const CreatePostsScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);

  const [photoURI, setPhotoURI] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

  const takePhoto = async () => {
    if (!cameraRef) return;
    try {
      const { uri } = await cameraRef.takePictureAsync();
      setPhotoURI(uri);

      await MediaLibrary.createAssetAsync(uri);

      const { coords } = await Location.getCurrentPositionAsync({});
      setCoordinates({ lat: coords.latitude, lon: coords.longitude });
    } catch (error) {
      console.log('file: CreatePostsScreen.jsx:32 ~ error >>', error);
    }
  };

  const handleTitleChange = value => setTitle(value);
  const handleLocationChange = value => setLocation(value);
  const handleSubmit = () =>
    navigation.navigate('Публікації', { photoURI, title, location, coordinates });
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
  const isDisabled = photoURI ? false : true;
  // ---------------------------------

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.cameraWrap}>
          <Camera style={styles.cameraViewport} ref={setCameraRef}>
            <TouchableOpacity onPress={takePhoto} style={styles.cameraBtn}>
              <FontAwesome name="camera" size={24} style={styles.cameraIcon} />
            </TouchableOpacity>
          </Camera>

          {photoURI && <Image style={styles.photo} source={{ uri: photoURI }} />}
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

        <TouchableOpacity style={submitStyles.btn} onPress={handleSubmit} disabled={isDisabled}>
          <Text style={submitStyles.text}>Опублікувати</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete} disabled={isDisabled}>
        <Feather name="trash-2" size={24} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
