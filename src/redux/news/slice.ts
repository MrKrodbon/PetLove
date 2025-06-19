import { createSlice } from "@reduxjs/toolkit";

import { NewsState } from "../../types/types";
import { getNews } from "./operations";

const initialState: NewsState = {
  results: [],
  page: 1,
  perPage: 1,
  totalPages: 0,
  search: "",
  isLoading: false,
  error: "",
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
    setSearchValue: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.results = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Get news failed";
      });
  },
});

export const { setNewPage, setTotalPages, setSearchValue } = newsSlice.actions;

export default newsSlice.reducer;
