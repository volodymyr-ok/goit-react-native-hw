import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './RegistrationScreenStyles';
const BgImage = require('../../assets/img/BgPhoto.jpg');
const addPhotoBtn = require('../../assets/img/addProfilePhotoBtn.png');
import AppLoading from 'expo-app-loading';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
  });
};

const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [isReady, setIsReady] = useState(false);
  //   if (!isReady)
  //     return (
  //       <AppLoading
  //         startAsync={loadFonts}
  //         onFinish={() => setIsReady(true)}
  //         onError={err => console.log(err)}
  //       />
  //     );

  const onFocus = () => setIsKeyboardShown(true);

  const onUnfocus = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {};
  const togglePassVisibility = () => setIsPasswordHidden(!isPasswordHidden);

  return (
    <ImageBackground style={styles.bgImage} source={BgImage}>
      <TouchableWithoutFeedback onPress={onUnfocus}>
        <View style={styles.mainContent}>
          <View style={styles.profilePhoto}>
            <TouchableOpacity>
              <Image source={addPhotoBtn} style={styles.addPhotoBtn} />
            </TouchableOpacity>
          </View>

          <Text style={styles.pageTitle}>Registration</Text>

          <View style={styles.from} onPress={onUnfocus}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                value={login}
                onChangeText={t => setLogin(t)}
                onFocus={onFocus}
              ></TextInput>

              <TextInput
                style={styles.input}
                placeholder="Email address"
                value={email}
                onChangeText={t => setEmail(t)}
                onFocus={onFocus}
              ></TextInput>

              <View style={styles.passwordWrap}>
                <TextInput
                  style={{ ...styles.input, marginBottom: 0 }}
                  placeholder="Password"
                  value={password}
                  onChangeText={t => setPassword(t)}
                  onFocus={onFocus}
                  secureTextEntry={isPasswordHidden}
                ></TextInput>
                <TouchableOpacity onPress={togglePassVisibility} style={styles.secureBtn}>
                  <Text>{isPasswordHidden ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.submitBtn} ress={onSubmit}>
              <Text style={styles.submitText}>Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onP>
            <Text style={{ ...styles.navigationText, marginBottom: isKeyboardShown ? 0 : 78 }}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
