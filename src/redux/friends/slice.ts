import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./operations";
import { FriendsState } from "@/types/types";

const initialState: FriendsState = {
  results: [],
  isLoading: false,
  error: "",
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.fulfilled, (state, action) => {
        state.results = action.payload;
        state.isLoading = false;
      })
      .addCase(getFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.error =
          action.error.message || "Unexpected error while getting partners";
      });
  },
});

export default friendsSlice.reducer;
