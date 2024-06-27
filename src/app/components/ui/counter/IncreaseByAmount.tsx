import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementByInput,
  incrementByInput,
} from "../../../redux/features/counter/counterSlice";

const IncreaseByAmount = () => {
  const [increaseBy, setIncreaseBy] = useState(0);

  const dispatch = useDispatch();

  const increaseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setIncreaseBy(parseInt(value));
  };

  return (
    <div className="p-4 bg-white  ">
      <div
        // onSubmit={increaseSubmitHandler}
        className="bg-primary p-2"
        //   action=""
      >
        <div className="flex flex-col items-center ">
          <span className="bg-white p-2 mb-2 rounded-lg">
            <label htmlFor="">Input Amount ⬇️</label>
          </span>
          <span>
            <input
              onChange={increaseHandler}
              //  defaultValue={parseInt(increaseBy)}
              type="number"
              className="input input-bordered"
            />
          </span>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                dispatch(incrementByInput(increaseBy));
              }}
              type="submit"
              className="btn btn-success mt-2"
            >{`Increase by ${increaseBy}`}</button>
            <button
              onClick={() => {
                dispatch(decrementByInput(increaseBy));
              }}
              type="submit"
              className="btn btn-error mt-2"
            >{`Decrease by ${increaseBy}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncreaseByAmount;
