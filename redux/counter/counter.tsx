import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

interface counterState {
  value: number;
  status: string;
}

const initialState: counterState = {
  value: 0,
  status: "idle",
};

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       console.log(state.status);
    //       state.status = "loading";
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = "idle";
    //       state.value += action.payload;
    //     });
    // },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;