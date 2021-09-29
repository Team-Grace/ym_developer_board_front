import { combineReducers } from "@reduxjs/toolkit";
import counterSlice  from "redux/counter/counter";

const rootReducer = combineReducers({
  counterSlice,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;