import { auth, db } from '../../firebase/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

// const auth = getAuth;

export const signUp = createAsyncThunk('auth/signUp', async (credentials, thunkAPI) => {
  const { login, email, password } = credentials;
  const { rejectWithValue } = thunkAPI;
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log('before updateProfile ~ user >>', user);

    // await updateProfile(user, { displayName: login });
    console.log('after updateProfile ~ user >>', user);

    return { ...user, displayName: login };
  } catch (err) {
    console.log(`ERROR CODE: ${err.code}.\n ${err.message}`);
    return rejectWithValue();
  }
});

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = signInWithEmailAndPassword(auth, email, password);

      console.log('file: authOperations.js:10 ~ userCredential >>', userCredential);
    } catch (err) {
      console.log(`ERROR CODE: ${err.code}.\n ${err.message}`);
      return rejectWithValue();
    }
  }
);

// export const signUp = () => async (dispatch, getState) => {
//   try {
//     const auth = getAuth();
//     const userCredential = createUserWithEmailAndPassword(auth, email, password);
//     console.log('file: authOperations.js:10 ~ userCredential >>', userCredential);
//   } catch (err) {
//     console.log(`Error code ${err.code}.\n${err.message}`);
//   }
// };

// export const signOut = () => async (dispatch, getState) => {};
