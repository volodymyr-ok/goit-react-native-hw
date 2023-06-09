import { auth } from '../../firebase/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { Alert } from 'react-native';

export const authSignUp = createAsyncThunk('signUp', async (credentials, thunkAPI) => {
  const { login, email, password, photoURL } = credentials;
  const { rejectWithValue } = thunkAPI;

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: login, photoURL });
    return { ...user, displayName: login, photoURL };
  } catch (err) {
    Alert.alert('Error', `ERROR CODE: ${err.code}.\n ${err.message}`);
    return rejectWithValue(`ERROR CODE: ${err.code}.\n ${err.message}`);
  }
});

export const authSignIn = createAsyncThunk(
  'signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (err) {
      console.log(`ERROR CODE: ${err.code}.\n ${err.message}`);
      return rejectWithValue(`ERROR CODE: ${err.code}.\n ${err.message}`);
    }
  }
);

export const authSignOut = createAsyncThunk('signOut', async (_, { rejectWithValue }) => {
  try {
    return await signOut(auth);
  } catch (err) {
    return rejectWithValue(`ERROR CODE: ${err.code}.\n ${err.message}`);
  }
});
