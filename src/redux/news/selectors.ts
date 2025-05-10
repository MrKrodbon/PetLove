import { StoreType } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectNewsState = (state: StoreType) => state.news;

export const selectGetNews = createSelector([selectNewsState], (newsState) => ({
  news: newsState.news,
  loading: newsState.loading,
  error: newsState.error,
}));
