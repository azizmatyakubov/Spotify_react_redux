import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from 'react-redux'
import configureStore from './app/store'

import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from 'redux-persist'

const persistor = persistStore(configureStore)

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>,
  document.getElementById("root")
);


