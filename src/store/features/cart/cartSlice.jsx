import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
