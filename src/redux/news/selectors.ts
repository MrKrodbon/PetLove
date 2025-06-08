// import { StoreType } from "../store";
// import { createSelector } from "@reduxjs/toolkit";

import { StoreType } from "../store";

// const selectNewsState = (state: StoreType) => state.news;

// export const selectGetNews = createSelector([selectNewsState], (newsState) => ({
//   news: newsState.news,
//   loading: newsState.loading,
//   error: newsState.error,
// }));

// export const selectNewsByCurrentPage = (state: StoreType) => state.news.news;

export const selectCurrentNewsPage = (state: StoreType) => state.news.page;
// export const selectCurrentPetsPage = (state: StoreType) => state.;
export const selectTotalPages = (state: StoreType) => state.news.totalPages;
export const selectSearchValue = (state: StoreType) => state.news.search;
