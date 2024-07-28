import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/CAKE/CakeSlice";
import IceCreamReducer from "../features/ICE CREAM/IceCreamSlice";
import { reduxLogger } from "redux-logger";

import userReducer from "../features/users/userSlice";
// import logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: { 
    cake: cakeReducer,
    icecream: IceCreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
