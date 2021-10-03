import { combineReducers } from "@reduxjs/toolkit";
import counterSlice  from "redux/counter/counter";
import projectBoard from "redux/projectBoard";

const rootReducer = combineReducers({
  projectBoard,
  counterSlice,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;