import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../CAKE/CakeSlice";
const initialState = {
  numofIceCreams: 20,
};

const IceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numofIceCreams--;
    },
    restocked: (state, actions) => {
      state.numofIceCreams += actions.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numofIceCreams--;
  //     },
  //   },

  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numofIceCreams--;
  //   });
  // },
});

export default IceCreamSlice.reducer;
export const { ordered, restocked } = IceCreamSlice.actions;
