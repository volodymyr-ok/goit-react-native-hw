import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import LoginScreen from './Screens/Auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/Auth/RegistrationScreen/RegistrationScreen';
import Home from './Screens/Main/Home/Home';
import { store } from './redux/store';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

// SplashScreen.preventAutoHideAsync();
const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const customFonts = {
  'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  Orbitron: require('./assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf'),
};

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, user => (user ? setIsAuth(true) : setIsAuth(false)));

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) await SplashScreen.hideAsync();
  // }, [appIsReady]);

  if (!appIsReady) return null;

  const screenOptions = { headerShown: false };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <View style={{ flex: 1 }} onLayout={onLayoutRootView}> */}
        {isAuth ? (
          <MainStack.Navigator screenOptions={screenOptions}>
            <MainStack.Screen name="Home" component={Home} />
          </MainStack.Navigator>
        ) : (
          <AuthStack.Navigator screenOptions={screenOptions}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Registration" component={RegistrationScreen} />
          </AuthStack.Navigator>
        )}
        {/* </View> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
