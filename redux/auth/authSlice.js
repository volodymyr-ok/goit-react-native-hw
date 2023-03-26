import { createSlice } from '@reduxjs/toolkit';
import { authSignIn, authSignOut, authSignUp } from './authOperations';

const initialState = {
  userId: '',
  nickname: '',
  email: '',
  avatar: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, { payload }) {
      console.log('file: authSlice.js:16 ~ payload >>', payload);
      if (!state.userId) state.userId = payload.uid;
      if (!state.nickname) state.nickname = payload.displayName;
      if (!state.email) state.email = payload.email;
      if (!state.avatar) state.avatar = payload.photoURL;
    },
    uploadAvatar(state, { payload }) {
      state.avatar = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(authSignIn.fulfilled, (state, { payload }) => {
      state.userId = payload.uid;
      state.nickname = payload.displayName;
      state.email = payload.email;
    });

    builder.addCase(authSignUp.fulfilled, (state, action) => {
      const { payload } = action;
      console.log('file: authSlice.js:35 ~ payload >>', payload);
      state.userId = payload.uid;
      state.nickname = payload.displayName;
      state.email = payload.email;
      state.avatar = payload.photoURL;
    });

    builder.addCase(authSignOut.fulfilled, state => {
      state.userId = '';
      state.nickname = '';
      state.email = '';
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setCredentials, uploadAvatar } = authSlice.actions;

// {
//   [signUp.fulfilled](state, action) {
//    const { payload } = action;
//    console.log('file: authSlice.js:17 ~ payload >>', payload);
//    state.userId = payload.uid;
//    state.nickname = payload.displayName;
//   },
//   [signIn.fulfilled](state, { payload }) {
//    state.userId = payload.uid;
//    state.nickname = payload.displayName;
//   },
// },
