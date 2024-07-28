//Entire Application contains a single Store
// Responsible for holding application state
// getState() method gives access to state ,it holds.
// dispatch(action) method allow state to be updated
// has subscribe(listener) method as well by which we can register listeners
// => this method accept function (listener) as a parameter which executes anytime when state in redux store changes

import { createStore } from "redux";
import Bookreducer from "../Book Reducer/BookReducer";
const store = createStore(Bookreducer);
export default store;
