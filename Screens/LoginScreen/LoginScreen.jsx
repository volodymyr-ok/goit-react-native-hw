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
const initialFormData = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [emailBorder, setEmailBorder] = useState(colors.shapeAccent);
  const [passwordBorder, setPasswordBorder] = useState(colors.shapeAccent);

  useEffect(() => {
    const listenShow = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShown(true));
    const listenHide = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShown(false));
    return () => {
      listenShow.remove();
      listenHide.remove();
    };
  }, []);

  const resetState = () => {
    setEmail('');
    setPassword('');
    setFormData({ email: '', password: '' });
  };

  const onFocus = key => {
    switch (key) {
      case 'e':
        setEmailBorder(colors.mainAccent);
        break;
      case 'p':
        setPasswordBorder(colors.mainAccent);
        break;
      default:
        break;
    }
  };

  const onBlur = key => {
    switch (key) {
      case 'e':
        setEmailBorder(colors.shapeAccent);
        break;
      case 'p':
        setPasswordBorder(colors.shapeAccent);
        break;
      default:
        break;
    }
  };

  const onUnfocus = () => Keyboard.dismiss();

  const onChange = (key, value) => {
    switch (key) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

    setFormData(prevState => ({ ...prevState, [key]: value }));
  };

  const onSubmit = () => {
    onUnfocus();
    console.log(formData);
    resetState();
  };

  const togglePassVisibility = () => setIsPasswordHidden(!isPasswordHidden);

  return (
    <TouchableWithoutFeedback onPress={onUnfocus}>
      <View>
        <ImageBackground style={styles.bgImage} source={BgImage}>
          <View style={{ ...styles.mainContent, paddingBottom: isKeyboardShown ? 0 : 144 }}>
            <Text style={styles.pageTitle}>Увійти</Text>

            <View style={styles.from}>
              <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                // behavior="position"
                keyboardVerticalOffset={-80}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: emailBorder,
                  }}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={value => onChange('email', value)}
                  onFocus={() => onFocus('e')}
                  onBlur={() => onBlur('e')}
                ></TextInput>

                <View style={styles.passwordWrap}>
                  <TextInput
                    style={{ ...styles.input, marginBottom: 0, borderColor: passwordBorder }}
                    placeholder="Пароль"
                    value={password}
                    onChangeText={value => onChange('password', value)}
                    onFocus={() => onFocus('p')}
                    onBlur={() => onBlur('p')}
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
