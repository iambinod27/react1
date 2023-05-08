import { createSlice } from "@reduxjs/toolkit";
import {
  getProduct,
  getSingleProduct,
} from "../../actions/products/productActions";

const initialState = {
  products: [],
  isLoading: false,
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeSelectedProduct: (state) => {
      state.product = {};
    },
  },
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
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
    },
    [getSingleProduct.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { removeSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
