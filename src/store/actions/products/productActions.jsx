import { createAsyncThunk } from "@reduxjs/toolkit";
import ecommerceAxios from "../../../axios/axios";

export const getProduct = createAsyncThunk(
  "getProduct/all",
  async (payload, thunkAPI) => {
    try {
      const res = await ecommerceAxios.get("/products");
      const data = await res.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
