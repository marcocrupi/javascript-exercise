# REDUX TUTORIAL EXERCISE

## Dispatch Actions to the Store

- store.js

```js
import { createStore } from "redux";

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

// Let’s get back to our counter application. The count starts at 0 and we want to increment it up to 2.
// At the bottom of store.js dispatch two actions with a type of 'increment' using the store.dispatch() method.
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

// Let’s modify the countReducer function so that it can handle 'decrement' actions as well.
// Add an additional case to the countReducer function that handles 'decrement' action types and returns state - 1.
console.log(store.getState());

// Now, let’s dispatch some 'decrement' action to the store.
// At the bottom of store.js , dispatch 3 actions with a type of 'decrement'.
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });

// Finally, print to the console the final value of store.getState(). The final state should be -1.
console.log(store.getState());
```