import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { todosReducer } from "./store/reducers";
import { loadState, saveState } from "./store/utilities";

const store = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  loadState(),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
