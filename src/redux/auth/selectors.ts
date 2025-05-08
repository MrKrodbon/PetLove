import { StoreType } from "../store";

export const selectIsLoggedIn = (state: StoreType) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: StoreType) => state.auth.isRefreshing;

export const selectErrorAuth = (state: StoreType) => state.auth.error;

export const selectUserData = (state: StoreType) => {
  return { name: state.auth.name, email: state.auth.email };
};
