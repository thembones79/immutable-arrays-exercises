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
    case actions.ADD_AN_EVENT_TO_THE_END_OF_THE_ARRAY:
      return [...state, action.payload];
    case actions.INSERT_AN_EVENT_AFTER_THE_FIRST_ITEM:
      return [...state.slice(0, 1), action.payload, ...state.slice(2)];
    case actions.REMOVE_THE_SECOND_EVENT_FROM_THE_LIST:
      return state.filter((item, index) => {
        return index !== 1;
      });
    case actions.REMOVE_THE_EVENT_WITH_ID_1:
      return state.filter(item => {
        return item.id !== action.payload.id;
      });
    case actions.PRODUCE_AN_ARRAY_THAT_ONLY_CONTAINS_SALES:
      return state.filter(item => {
        return item.type === action.payload.type;
      });

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
