import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, initializeAuth } from 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getReactNativePersistence } from 'firebase/auth/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAzaoVzj9X9gOWo9l6zrDvY0sdhz1Hxx6s',
  authDomain: 'rn-goit-social.firebaseapp.com',
  projectId: 'rn-goit-social',
  storageBucket: 'rn-goit-social.appspot.com',
  messagingSenderId: '59494387673',
  appId: '1:59494387673:web:ce2802901574b5e18a53c8',
};

export const db = initializeApp(firebaseConfig);

// export const auth = getAuth(db);
export const auth = initializeAuth(db, {
  // persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(db);
export const firestore = getFirestore(db);
