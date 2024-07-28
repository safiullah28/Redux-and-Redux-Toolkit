import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchasebooks from "./Book Actions/ReduxActions";

const BookContainer = () => {
  const noofBooks = useSelector((state) => state.NumberofBooks);
  const dispatch = useDispatch();
  return (
    <>
      <div>Book Container</div>
      <h2>No of Books - {noofBooks}</h2>
      <button
        onClick={() => {
          dispatch(purchasebooks());
        }}
      >
        Buy Book
      </button>
    </>
  );
};

export default BookContainer;
