import { StoreType } from "../store";

export const selectIsLoggedIn = (state: StoreType) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: StoreType) => state.auth.isRefreshing;

export const selectErrorAuth = (state: StoreType) => state.auth.error;

export const selectUserData = (state: StoreType) => state.auth.user;

export const selectIsRefreshingUser = (state: StoreType) =>
  state.auth.isRefreshing;
