import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./operations";
import { NewsState } from "../../types/types";

const initialState: NewsState = {
  news: [],
  error: null,
  loading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload.results;
      })
      .addCase(getNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.error = action.error.message || "Error of getting news";
      });
  },
});

export default newsSlice.reducer;
