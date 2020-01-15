import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import * as actions from "./actions";

const INITIAL_STATE = [
  { id: 0, type: "SALE", value: 3.99 },
  { id: 1, type: "REFUND", value: -1.99 },
  { id: 2, type: "SALE", value: 17.49 }
];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ADD_AN_EVENT_TO_THE_BEGINNING_OF_THE_ARRAY:
      return [action.payload, ...state];

    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
