import type { Reducer } from '@reduxjs/toolkit';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import authSlice from './authSlice';
import extraSlice from './extraSlice';

const reducers = combineReducers({
  authSlice: authSlice,
  extraSlice: extraSlice,
});
const logger = createLogger({});
const persistConfig = {
  key: 'root',
  version: 1,
  storage: EncryptedStorage,
  blacklist: ['extraSlice'],
  stateReconciles: hardSet as (inboundState: CombinedState) => CombinedState,
};

type CombinedState = typeof reducers extends Reducer<infer U, any> ? U : never;

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore specific actions and paths
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      ignoredPaths: ['authSlice.err'],
    },
  }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
