import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./CakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No Of Cakes - {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Cakes
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(restocked(value));
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};

export default CakeView;
