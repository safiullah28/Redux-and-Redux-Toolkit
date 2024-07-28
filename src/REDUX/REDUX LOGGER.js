// //Middle Ware

// const { type } = require("@testing-library/user-event/dist/type");
// const redux = require("redux");
// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
// const applyMiddleware = redux.applyMiddleware;

// const bindActionCreators = redux.bindActionCreators;
// const CAKE_ORDERED = "CAKE_ORDERED";
// const CAKE_RESTOCKED = "CAKE_RESTOCKED";
// const ICECREAM_ORDERED = "ICECREAM_ORDERED";
// const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
// function orderCake(qty = 1) {
//   return {
//     type: CAKE_ORDERED,
//     payload: qty,
//   };
// }

// function restockCake(qty = 1) {
//   return {
//     type: CAKE_RESTOCKED,
//     payload: qty,
//   };
// }
// function orderIcecream(qty = 1) {
//   return {
//     type: ICECREAM_ORDERED,
//     payload: qty,
//   };
// }
// function restockIcecream(qty = 1) {
//   return {
//     type: ICECREAM_RESTOCKED,
//     payload: qty,
//   };
// }
// //Reducer
// // (previousState,Action)=>newState

// //ORDERING CAKES
// const initalCakestate = {
//   numofcake: 10,
// };
// const initialIcecreamstate = {
//   numofIcecream: 20,
// };

// const cakereducer = (state = initalCakestate, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numofcake: state.numofcake - action.payload,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numofcake: state.numofcake + action.payload,
//       };
//     default:
//       return state;
//   }
// };
// const icecreamReducer = (state = initialIcecreamstate, action) => {
//   switch (action.type) {
//     case ICECREAM_ORDERED:
//       return {
//         numofIcecream: state.numofIcecream - action.payload,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         numofIcecream: state.numofIcecream + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   cake: cakereducer,
//   icecream: icecreamReducer,
// });
// const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("Initial state", store.getState());
// const unsubsrcibe = store.subscribe(() => {});

// // store.dispatch(orderCake());
// // store.dispatch(orderCake());
// // store.dispatch(orderCake());

// //RESTOCKING THE CAKE

// // store.dispatch(restockCake());
// // store.dispatch(restockCake());
// // store.dispatch(restockCake());

// const actions = bindActionCreators(
//   { orderCake, restockCake, orderIcecream, restockIcecream },
//   store.dispatch
// );
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();

// actions.restockCake(3);

// actions.orderIcecream();
// actions.restockIcecream(2);
// unsubsrcibe();
