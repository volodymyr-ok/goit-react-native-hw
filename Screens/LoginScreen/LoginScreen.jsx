import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../../utils/styles';
import styles from './LoginScreenStyles';
const BgImage = require('../../assets/img/BgPhoto.jpg');

const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState({});

  useEffect(() => {
    const listenShow = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShown(true));
    const listenHide = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShown(false));
    return () => {
      listenShow.remove();
      listenHide.remove();
    };
  }, []);

  const changeBorder = input => (isFocused[input] ? colors.mainAccent : colors.shapeAccent);
  const togglePassVisibility = () => setIsPasswordHidden(!isPasswordHidden);
  const onFocus = input => setIsFocused({ [input]: true });
  const onBlur = input => setIsFocused({ [input]: false });

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground style={styles.bgImage} source={BgImage}>
          <View style={{ ...styles.mainContent, paddingBottom: isKeyboardShown ? 0 : 144 }}>
            <Text style={styles.pageTitle}>Увійти</Text>

            <View style={styles.from}>
              <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: changeBorder('email'),
                  }}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={value => setEmail(value)}
                  onFocus={() => onFocus('email')}
                  onBlur={() => onBlur('email')}
                ></TextInput>

                <View style={styles.passwordWrap}>
                  <TextInput
                    style={{
                      ...styles.input,
                      marginBottom: 0,
                      borderColor: changeBorder('password'),
                    }}
                    placeholder="Пароль"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    onFocus={() => onFocus('password')}
                    onBlur={() => onBlur('password')}
                    secureTextEntry={isPasswordHidden}
                  ></TextInput>

                  <TouchableOpacity onPress={togglePassVisibility} style={styles.secureBtn}>
                    <Text style={styles.secureText}>
                      {isPasswordHidden ? 'Показати' : 'Приховати'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>

              <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
                <Text style={styles.submitText}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={{ ...styles.navigationText }}>Немає аккаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
