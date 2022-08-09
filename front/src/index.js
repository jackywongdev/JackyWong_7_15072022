import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./styles/sass/index.css";
import App from "./App";

//redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//devtools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
