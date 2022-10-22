import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const defaultState = 0;
const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDUSER":
      return state.concat(action.payload.userData);
    default:
      return state;
  }
};

const reducer = combineReducers({
  count: counterReducer,
  users: usersReducer,
});

const store = createStore(
  reducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
