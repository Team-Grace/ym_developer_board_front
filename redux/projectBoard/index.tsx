import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COLUMN_NAMES } from 'constant/projectBoard';
import { CurrentItem, FormValuesProps } from 'types/projectBoard/projectBoard';

const { TODO, IN_PROGRESS, DONE } = COLUMN_NAMES;


interface InitialStateProps {
  [TODO]: FormValuesProps[],
  [IN_PROGRESS]: FormValuesProps[],
  [DONE]: FormValuesProps[],
}

const initialState: InitialStateProps = {
  [TODO]: [],
  [IN_PROGRESS]: [],
  [DONE]: []
}

export const projectBoard = createSlice({
  name: "projectBoard",
  initialState,
  reducers: {
    uploadTodo: (state: any, action:PayloadAction<FormValuesProps>) => {
      state[TODO] = [...state[TODO], action.payload];
    },
    removeTodo: (
      state: any, 
      action: PayloadAction<{ id: number, columnName: string}>
    ) => {
      const { id, columnName } = action.payload;
      state[columnName] = state[columnName].filter((el:CurrentItem) => el.id !== id)
    },
    orderMoveItem: (
      state: any,
      action: PayloadAction<{ columnName: string, selectObject: FormValuesProps[]}>
    ) => {
      const { columnName, selectObject } = action.payload;
      state[columnName] = selectObject;
    },
    changeColumnItem: (state: any, action: PayloadAction<InitialStateProps>) => {
      state[TODO] = action.payload[TODO];
      state[IN_PROGRESS] = action.payload[IN_PROGRESS];
      state[DONE] = action.payload[DONE];
    }
  },
});

export const { uploadTodo, removeTodo, orderMoveItem, changeColumnItem } = projectBoard.actions;
export default projectBoard.reducer;