import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./operations";

const initialState = {
  friends: {
    address: "",
    addressURL: "",
    email: "",
    imageUrl: "",
    phone: "",
    title: "",
    url: "",
    workDays: [],
  },
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
        state.friends = action.payload;
      })
      .addCase(getFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.error = action.error.message || "";
      });
  },
});

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;
