import React from 'react';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
// import { NavigationContainer } from 'react-native-screens';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <RegistrationScreen />
    // <LoginScreen />
    // <NavigationContainer>
    //   <Stack.Screen name="Register" component={RegistrationScreen} />
    //   <Stack.Screen name="Login" component={LoginScreen} />
    // </NavigationContainer>
  );
}

export default App;
