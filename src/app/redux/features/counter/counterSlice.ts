import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByInput: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementByInput: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByInput, decrementByInput } =
  counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
