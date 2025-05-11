import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import uiReducer from "./ui/slice";
import { newsApi } from "./news/operations";
import newsReducer from "./news/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
