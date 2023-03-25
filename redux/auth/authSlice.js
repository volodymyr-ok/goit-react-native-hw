import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './authOperations';

const initialState = {
  userId: '',
  nickname: '',
  email: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      const { payload } = action;
      console.log('file: authSlice.js:17 ~ payload >>', payload);
      state.userId = payload.uid;
      state.nickname = payload.displayName;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
