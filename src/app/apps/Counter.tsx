import { useDispatch, useSelector } from "react-redux";
import IncreaseByAmount from "../components/ui/counter/IncreaseByAmount";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { RootState } from "../redux/store";

const Counter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div className="bg-purple-400 p-4 pb-10">
        <div className="flex justify-center">
          <span className="text-8xl font-semibold">{count}</span>
        </div>
        <div className="flex justify-center gap-4 mt-6 pb-4">
          <button
            onClick={() => {
              incrementHandler();
            }}
            className=" text-xl btn btn-success"
          >
            Increment
          </button>
          <button
            onClick={() => {
              decrementHandler();
            }}
            className=" text-xl btn btn-error"
          >
            Decrement
          </button>
        </div>
        <IncreaseByAmount />
      </div>
    </div>
  );
};

export default Counter;
