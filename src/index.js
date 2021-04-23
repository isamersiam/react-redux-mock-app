import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { bankingReducer } from "./reducers/bankingReducers";
import { rootReducer } from "./reducers/combineReducer";

const store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
