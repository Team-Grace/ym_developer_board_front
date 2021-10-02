import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const { logger } = require("redux-logger");

const env = process.env.NODE_ENV;

const createNoopStorage = () => {
  return {
    getItem(_key:any) {
      return Promise.resolve(null);
    },
    setItem(_key:any, value:any) {
      return Promise.resolve(value);
    },
    removeItem(_key:any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  debug: true,
  // blacklist: ['counterSlice']
};

const middleware = [];

if (env === 'development') middleware.push(logger);

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