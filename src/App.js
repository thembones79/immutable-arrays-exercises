import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions";

const App = ({
  events,
  addAnEventToTheBeginningOfTheArray,
  addAnEventToTheEndOfTheArray,
  insertAnEventAfterTheFirstItem,
  removeTheSecondEventFromTheList,
  removeTheEventWithId1,
  produceAnArrayThatOnlyContainsSales
}) => {
  return (
    <div>
      <h1>Immutable Arrays Excersises</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>type</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.type}</td>
                <td>{event.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={addAnEventToTheBeginningOfTheArray}>
          1. Add an event to the beginning of the array
        </button>
        <button onClick={addAnEventToTheEndOfTheArray}>
          2. Add an event to the end of the array
        </button>
        <button onClick={insertAnEventAfterTheFirstItem}>
          3. Insert an event after the first item
        </button>
        <button onClick={removeTheSecondEventFromTheList}>
          4. Remove the second event from the list
        </button>
        <button onClick={removeTheEventWithId1}>
          5. Remove the event with id 1
        </button>
        <button onClick={produceAnArrayThatOnlyContainsSales}>
          6. Produce an array that only contains sales
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log({ events: state });
  return { events: state };
}

export default connect(mapStateToProps, actions)(App);
