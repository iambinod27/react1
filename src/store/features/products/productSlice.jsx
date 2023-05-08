import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../actions/products/productActions";

const initialState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    [getProduct.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default productSlice.reducer;
