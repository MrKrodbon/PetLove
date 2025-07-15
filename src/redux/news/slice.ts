import { createSlice } from "@reduxjs/toolkit";

import { NewsState } from "@/types/types";
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
      state.results = [];
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    handleSearch: (state, action) => {
      state.page = 1;
      state.search = action.payload;
      state.results = [];
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
        state.error =
          action.error.message || "Unexpected error while getting news";
      });
  },
});

export const { setNewPage, setTotalPages, handleSearch } = newsSlice.actions;

export default newsSlice.reducer;
