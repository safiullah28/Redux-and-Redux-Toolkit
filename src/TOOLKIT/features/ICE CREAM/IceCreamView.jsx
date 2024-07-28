import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./IceCreamSlice";

const IceCreamView = () => {
  const numofIceCreams = useSelector((state) => state.icecream.numofIceCreams);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No Of Ice Cream - {numofIceCreams} </h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Ice Cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      ></input>

      <button
        onClick={() => {
          dispatch(restocked(1));
        }}
      >
        Restock Ice Cream
      </button>
    </div>
  );
};

export default IceCreamView;
