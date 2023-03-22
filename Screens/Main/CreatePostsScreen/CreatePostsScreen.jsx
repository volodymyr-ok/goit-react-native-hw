import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Feather } from '@expo/vector-icons';
// import * as MediaLibrary from 'expo-media-library';
import styles from './CreatePostsScreen.styles';
import { colors } from '../../../utils/styles';

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const [photoURI, setPhotoURI] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const [isSubmitGranted, setIsSubmitGranted] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (!hasPermission) return <Text style={{ textAlign: 'center' }}>No access to camera</Text>;

  const takePhoto = async () => {
    if (!cameraRef) return;
    const { uri } = await cameraRef.takePictureAsync();
    setPhotoURI(uri);
  };

  const handleTitleChange = value => setTitle(value);
  const handleLocationChange = value => setLocation(value);
  const handleSubmit = () => navigation.navigate('Публікації', { photoURI, title, location });
  const handleDelete = () => setPhotoURI(null);

  // ---------------------------------
  const locationStyles = {
    ...styles.input,
    marginBottom: 0,
    paddingLeft: 28,
  };
  const submitStyles = {
    btn: {
      ...styles.submitBtn,
      backgroundColor: isSubmitGranted ? colors.mainAccent : colors.layoutBg,
    },
    text: {
      ...styles.submitText,
      color: isSubmitGranted ? colors.submitText : colors.placeholder,
    },
    activeOpacity: isSubmitGranted ? 0.2 : 1,
  };
  const isSubmitDisabled = false;
  const isDeleteDisabled = photoURI ? false : true;
  // ---------------------------------

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.cameraWrap}>
          {photoURI && <Image style={styles.photo} source={{ uri: photoURI }} />}

          <Camera style={styles.cameraViewport} ref={setCameraRef} ratio={'4:3'}>
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
          disabled={isSubmitDisabled}
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
