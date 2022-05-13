import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import configureStore from './app/store'

ReactDOM.render(
  <Provider store={configureStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


