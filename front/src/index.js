import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./styles/sass/index.css";
import App from "./App";
//devtools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
//redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";
import { getUsers } from "./redux/actions/users.actions";
import { getPosts } from "./redux/actions/post.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
store.dispatch(getUsers());
store.dispatch(getPosts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
