import { buy_book } from "../Book Actions/Booktypes";

const intialState = {
  NumberofBooks: 20,
};
const Bookreducer = (state = intialState, action) => {
  switch (action.type) {
    case buy_book:
      return {
        ...state,
        NumberofBooks: state.intialState - 1,
      };
    default:
      return state;
  }
};
export default Bookreducer;

//In reducers we use mostly Switch statement
