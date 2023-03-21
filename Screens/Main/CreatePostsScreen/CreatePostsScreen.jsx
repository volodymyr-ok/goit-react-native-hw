import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import styles from './CreatePostsScreen.styles';

const CreatePostsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Camera style={styles.cameraView}>
        <TouchableOpacity onPress={() => {}} style={styles.cameraBtn}>
          <FontAwesome name="camera" size={24} style={styles.cameraIcon} />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CreatePostsScreen;
