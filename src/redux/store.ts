import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import uiReducer from "./ui/slice";
import newsReducer from "./news/slice";
import friendsReducer from "./friends/slice";
import petsReducer from "./pets/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    news: newsReducer,
    friends: friendsReducer,
    pets: petsReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
