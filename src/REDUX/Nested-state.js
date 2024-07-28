//IMMER

//const redux = require("redux");
// const produce = require("immer").produce;
// const initialState = {
//   name: "Safi",
//   address: {
//     city: "Lahore",
//     street: "PU Hostel Road",
//     state: "Punjab",
//   },
// };

// const STREET_UPDATED = "STREET_UPDATED";

// const updateStreet = (street) => {
//   return {
//     type: STREET_UPDATED,
//     payload: street,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case STREET_UPDATED: {
//       return produce(state, (draft) => {
//         draft.address.street = action.payload;
//       });
//     }
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(reducer);
// console.log("Initial State : ", store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log("Updated State :", store.getState());
// });
// store.dispatch(updateStreet("14 Hostel, 76 Room"));
// unsubscribe();

