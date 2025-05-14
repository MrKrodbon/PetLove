import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import uiReducer from "./ui/slice";
import { api } from "./news/operations";
import newsReducer from "./news/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    news: newsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
