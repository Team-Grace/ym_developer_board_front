import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistStore } from 'redux-persist';

const { logger } = require("redux-logger");
const { persistReducer } = require('redux-persist');
const storage = require('redux-persist/lib/storage').default;

const env = process.env.NODE_ENV;
const persistConfig = {
  key: "root",
  storage,
  debug: true,
  // blacklist: ['counterSlice']
};

const middleware = [];

if (env === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store:any = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

store.__PERSISTOR = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;