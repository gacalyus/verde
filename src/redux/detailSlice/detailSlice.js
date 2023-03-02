import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  detail: [],
};

export const getItem = createAsyncThunk("getItem", async (params) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params}`
  );
  return data;
});
const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default detailSlice.reducer;
