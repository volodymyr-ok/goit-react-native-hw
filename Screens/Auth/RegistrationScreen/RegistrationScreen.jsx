import React, { useEffect, useState } from 'react';
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
import { colors } from '../../../utils/styles';
import styles from './RegistrationScreenStyles';
import { AntDesign } from '@expo/vector-icons';

const BgImage = require('../../../assets/img/BgPhoto.jpg');

const RegistrationScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isFocused, setIsFocused] = useState({});
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    console.log({ login, email, password });
    setLogin('');
    setEmail('');
    setPassword('');
    navigation.navigate('Home');
  };

  return (
    <ImageBackground style={styles.bgImage} source={BgImage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.mainContent, paddingBottom: isKeyboardShown ? 0 : 78 }}>
          <View style={styles.profilePhoto}>
            <TouchableOpacity style={styles.addPhotoBtn}>
              <AntDesign name="pluscircleo" size={24} color={colors.mainAccent} />
            </TouchableOpacity>
          </View>

          <Text style={styles.pageTitle}>Реєстрація</Text>

          <View style={styles.from}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: changeBorder('login'),
                }}
                placeholder="Логін"
                value={login}
                onChangeText={value => setLogin(value)}
                onFocus={() => onFocus('login')}
                onBlur={() => onBlur('login')}
              ></TextInput>

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

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navigationText}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
