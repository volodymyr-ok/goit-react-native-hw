import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

const middleware = getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false });

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
