import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import { auth } from '../firebase/config';
import { toggleLoader } from '../redux/auth/authSlice';
import LoginScreen from './Auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Auth/RegistrationScreen/RegistrationScreen';
import Home from './Home/Home';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const Main = () => {
  const [isAuth, setIsAuth] = useState(false);

  const isLoading = useSelector(state => state.isLoading);
  // const isLoading = true;
  const dispatch = useDispatch();

  dispatch(toggleLoader(true));

  onAuthStateChanged(auth, user => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      dispatch(toggleLoader(false));
    }
  });

  return (
    <View style={{ height: '100%' }}>
      {isAuth ? (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
      ) : (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Registration" component={RegistrationScreen} />
        </AuthStack.Navigator>
      )}
      {isLoading && <Loader />}
    </View>
  );
};

export default Main;
