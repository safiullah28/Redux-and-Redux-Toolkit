const store = require("./app/store");
const cakeActions = require("./features/CAKE/CakeSlice").cakeActions;
const fetchUsers = require("./features/users/userSlice").fetchUsers;

const IceCreamActions =
  require("./features/ICE CREAM/IceCreamSlice").IceCreamActions;

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(IceCreamActions.ordered());
// store.dispatch(IceCreamActions.ordered());
// store.dispatch(IceCreamActions.ordered());
// store.dispatch(IceCreamActions.restocked(2));

// unsubscribe();
