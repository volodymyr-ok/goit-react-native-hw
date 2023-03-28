import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { authSignIn, authSignOut, authSignUp } from './authOperations';

const initialState = {
  userId: '',
  nickname: '',
  email: '',
  avatar: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, { payload }) {
      if (!state.userId) state.userId = payload.uid;
      if (!state.nickname) state.nickname = payload.displayName;
      if (!state.email) state.email = payload.email;
      if (!state.avatar) state.avatar = payload.photoURL;
      state.isLoading = false;
    },
    uploadAvatar(state, { payload }) {
      state.avatar = payload;
    },
    toggleLoader(state, { payload }) {
      state.isLoading = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(authSignIn.rejected, (_, { payload }) => {
      Alert.alert('Помилка...', `${payload}`);
    });
    builder.addCase(authSignIn.fulfilled, (state, { payload }) => {
      state.userId = payload.uid;
      state.nickname = payload.displayName;
      state.email = payload.email;
      state.avatar = payload.photoURL;
    });

    builder.addCase(authSignUp.fulfilled, (state, action) => {
      const { payload } = action;
      state.userId = payload.uid;
      state.nickname = payload.displayName;
      state.email = payload.email;
      state.avatar = payload.photoURL;
    });

    builder.addCase(authSignOut.fulfilled, state => {
      state.userId = '';
      state.nickname = '';
      state.email = '';
      state.avatar = '';
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setCredentials, uploadAvatar, toggleLoader } = authSlice.actions;
