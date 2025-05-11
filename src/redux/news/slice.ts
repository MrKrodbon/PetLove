import { createSlice } from "@reduxjs/toolkit";

import { NewsState } from "../../types/types";

const initialState: NewsState = {
  page: 1,
  totalPages: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setNewPage, setTotalPages } = newsSlice.actions;

export default newsSlice.reducer;
