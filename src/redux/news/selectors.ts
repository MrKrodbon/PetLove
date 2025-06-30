import { StoreType } from "../store";

export const selectNewsByCurrentPage = (state: StoreType) => state.news.page;

export const selectNewsList = (state: StoreType) => state.news;
// export const selectCurrentPetsPage = (state: StoreType) => state.;
export const selectTotalPages = (state: StoreType) => state.news.totalPages;
export const selectSearchValue = (state: StoreType) => state.news.search;
