import React, {
  useEffect,
  useState,
  // useCallback,
} from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './Screens/Main';
// import * as SplashScreen from 'expo-splash-screen';
// import { View } from 'react-native';

// SplashScreen.preventAutoHideAsync();

const customFonts = {
  'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
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

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) await SplashScreen.hideAsync();
  // }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <View style={{ flex: 1 }} onLayout={onLayoutRootView}> */}
        <Main />
        {/* </View> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
