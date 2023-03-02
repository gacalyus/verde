import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const getList = createAsyncThunk("getList", async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return data;
});
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const newList = state.list.filter((item) => item.id !== action.payload);
      state.list = newList;
    },
    updateItem: (state, action) => {
      const newProjects = state.list.map((p) =>
        p.id === action.payload.id
          ? { ...p, body: action.payload.body, title: action.payload.title }
          : p
      );
      state.list = newProjects;
    },
    addItem: (state, action) => {
      const newItem = {
        userId: action.payload.userId,
        id: Math.floor(Math.random() * 888),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.list = [...state.list,newItem];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log(state.list, action.payload);
    });
  },
});
export const { removeItem, updateItem, addItem } = listSlice.actions;
export default listSlice.reducer;
