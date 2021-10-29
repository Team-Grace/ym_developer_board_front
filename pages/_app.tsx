import '../styles/globals.css';
import type { AppProps } from 'next/app';
import store from 'redux/store';
import { createWrapper } from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.__PERSISTOR}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore , {
  debug: process.env.NODE_ENV !== 'production'
});

export default wrapper.withRedux(MyApp);
