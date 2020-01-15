export const ADD_AN_EVENT_TO_THE_BEGINNING_OF_THE_ARRAY =
  "ADD_AN_EVENT_TO_THE_BEGINNING_OF_THE_ARRAY";
export const ADD_AN_EVENT_TO_THE_END_OF_THE_ARRAY =
  "ADD_AN_EVENT_TO_THE_END_OF_THE_ARRAY";
export const INSERT_AN_EVENT_AFTER_THE_FIRST_ITEM =
  "INSERT_AN_EVENT_AFTER_THE_FIRST_ITEM";
export const REMOVE_THE_SECOND_EVENT_FROM_THE_LIST =
  "REMOVE_THE_SECOND_EVENT_FROM_THE_LIST";
export const REMOVE_THE_EVENT_WITH_ID_1 = "REMOVE_THE_EVENT_WITH_ID_1";
export const PRODUCE_AN_ARRAY_THAT_ONLY_CONTAINS_SALES =
  "PRODUCE_AN_ARRAY_THAT_ONLY_CONTAINS_SALES";

let i = 2;
function increment() {
  return ++i;
}

export function addAnEventToTheBeginningOfTheArray() {
  return {
    type: ADD_AN_EVENT_TO_THE_BEGINNING_OF_THE_ARRAY,
    payload: { id: increment(), type: "SALE", value: 18.99 }
  };
}
export function addAnEventToTheEndOfTheArray() {
  return {
    type: ADD_AN_EVENT_TO_THE_END_OF_THE_ARRAY,
    payload: { id: increment(), type: "REFUND", value: -6.99 }
  };
}
export function insertAnEventAfterTheFirstItem() {
  return {
    type: INSERT_AN_EVENT_AFTER_THE_FIRST_ITEM,
    payload: { id: increment(), type: "SALE", value: 0.99 }
  };
}
export function removeTheSecondEventFromTheList() {
  return { type: REMOVE_THE_SECOND_EVENT_FROM_THE_LIST };
}
export function removeTheEventWithId1() {
  return { type: REMOVE_THE_EVENT_WITH_ID_1, payload: { id: 1 } };
}
export function produceAnArrayThatOnlyContainsSales() {
  return {
    type: PRODUCE_AN_ARRAY_THAT_ONLY_CONTAINS_SALES,
    payload: { type: "SALE" }
  };
}
