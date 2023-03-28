import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import styles from './CreatePostsScreen.styles';
import { colors } from '../../../utils/styles';
import { firestore, storage } from '../../../firebase/config';

const CreatePostsScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [photoURI, setPhotoURI] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const { userId, avatar } = useSelector(state => state.auth);

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

  const takePhoto = async () => {
    try {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      const { coords } = await Location.getCurrentPositionAsync({});
      setCoordinates({ lat: coords.latitude, lon: coords.longitude });
      setPhotoURI(uri);
    } catch (err) {
      console.log(`Error:\n ${err.message}`);
    }
  };

  const uploadFile = async uri => {
    try {
      const response = await fetch(uri); // конвертація файлу у формат для запиту
      const file = await response.blob(); // конвертація формату самого файлу
      const fileID = Date.now().toString(); // майбутня назва файлу, ідентифікатор
      const fileRef = ref(storage, `postImages/${fileID}`); // налаштування для навігації за файлом
      await uploadBytes(fileRef, file); // вивантаження файлу. повертає метадані
      return await getDownloadURL(fileRef); // посилання на файл
    } catch (err) {
      console.log(`Error:\n ${err.message}`);
    }
  };

  const postData = async () => {
    try {
      const imageURL = await uploadFile(photoURI);
      const colRef = collection(firestore, 'posts');
      addDoc(colRef, {
        imageURL,
        coordinates,
        title,
        location,
        userId,
        avatar,
        createdAt: Date.now(),
      });
    } catch (err) {
      console.log(`Error:\n ${err.message}`);
    }
  };

  const handleTitleChange = value => setTitle(value);
  const handleLocationChange = value => setLocation(value);
  const handleSubmit = () => {
    postData();
    navigation.navigate('Публікації');
  };

  const isDisabled = !photoURI || !title || !location ? true : false;
  // ---------------------------------

  const locationStyles = {
    ...styles.input,
    marginBottom: 0,
    paddingLeft: 28,
  };
  const submitStyles = {
    btn: {
      ...styles.submitBtn,
      backgroundColor: isDisabled ? colors.layoutBg : colors.mainAccent,
    },
    text: {
      ...styles.submitText,
      color: isDisabled ? colors.placeholder : colors.submitText,
    },
  };
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

      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => setPhotoURI('')}
        disabled={isDisabled}
      >
        <Feather name="trash-2" size={24} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
