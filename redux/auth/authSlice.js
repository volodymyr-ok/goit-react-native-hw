import { createSlice } from '@reduxjs/toolkit';
import { authSignIn, authSignOut, authSignUp } from './authOperations';

const initialState = {
  userId: '',
  nickname: '',
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, { payload }) {
      if (!state.userId) state.userId = payload.uid;
      if (!state.nickname) state.nickname = payload.displayName;
      if (!state.email) state.email = payload.email;
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
      state.userId = payload.uid;
      state.nickname = payload.displayName;
      state.email = payload.email;
    });

    builder.addCase(authSignOut.fulfilled, state => {
      state.userId = '';
      state.nickname = '';
      state.email = '';
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setCredentials } = authSlice.actions;

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
