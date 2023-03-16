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
import { colors } from '../../utils/styles';
import styles from './RegistrationScreenStyles';

const BgImage = require('../../assets/img/BgPhoto.jpg');
const addPhotoBtn = require('../../assets/img/addProfilePhotoBtn.png');
const initialFormData = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState(initialFormData);

  const [loginBorder, setLoginBorder] = useState(colors.shapeAccent);
  const [emailBorder, setEmailBorder] = useState(colors.shapeAccent);
  const [passwordBorder, setPasswordBorder] = useState(colors.shapeAccent);

  const resetState = () => {
    setLogin('');
    setEmail('');
    setPassword('');
    setFormData({ login: '', email: '', password: '' });
  };

  const onFocus = key => {
    setIsKeyboardShown(true);
    // не розумію як легше змінювати колір при фокус на інпуті
    switch (key) {
      case 'l':
        setLoginBorder(colors.mainAccent);
        break;
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
      case 'l':
        setLoginBorder(colors.shapeAccent);
        break;
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

  const onUnfocus = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onChange = (key, value) => {
    switch (key) {
      case 'login':
        setLogin(value);
        break;
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
    <ImageBackground style={styles.bgImage} source={BgImage}>
      <TouchableWithoutFeedback onPress={onUnfocus}>
        <View style={{ ...styles.mainContent, paddingBottom: isKeyboardShown ? 0 : 78 }}>
          <View style={styles.profilePhoto}>
            <TouchableOpacity>
              <Image source={addPhotoBtn} style={styles.addPhotoBtn} />
            </TouchableOpacity>
          </View>

          <Text style={styles.pageTitle}>Реєстрація</Text>

          <View style={styles.from}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: loginBorder,
                }}
                placeholder="Логін"
                value={login}
                onChangeText={value => onChange('login', value)}
                onFocus={() => onFocus('l')}
                onBlur={() => onBlur('l')}
              ></TextInput>

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
            <Text style={styles.navigationText}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
