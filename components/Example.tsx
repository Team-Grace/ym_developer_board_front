import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementByAmount} from 'redux/counter/counter';
import { RootState, AppDispatch } from 'redux/store';

const Example = () => {
  const count = useSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useDispatch<AppDispatch>();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onIncrementByAmount = (diff: number) => {
    dispatch(incrementByAmount(diff));
  };
  return (
    <div>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        <button onClick={() => onIncrementByAmount(5)}>+5</button>
        {count}
    </div>
  );
};

export default Example;