import React from "react";
import { buy_book } from "./Booktypes.js";

//Actions
export const purchasebooks = () => {
  return {
    type: buy_book,
  };
};

function ReduxActions() {
  //React Redux : Actions
  //ACtions are JS Objects that contains information
  // Actions are the only source of infromation for the store,tells us what has happened
  //Have type property like {type : 'BuyBook'} to buy a book from store and book now caontains
  // 9 books out of 10.
  //Compulsory to include type property to change the state
  //const Action={type : 'BuyBooks'}
  //Action type should be constant value

  return <div></div>;
}

export default ReduxActions;
