import React, { useCallback, useEffect, useState } from 'react';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();
const customFonts = {
  'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  Orbitron: require('./assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf'),
};

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View onLayout={onLayoutRootView}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </View>
  );
};

export default App;
