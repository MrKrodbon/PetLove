import { createSlice } from "@reduxjs/toolkit";

import { PetState } from "@/types/types";
import { getPets } from "./operations";

const initialState: PetState = {
  results: [],
  page: 1,
  perPage: 1,
  totalPages: 0,
  isLoading: false,
  error: "",
};

const petSlice = createSlice({
  name: "pets",
  initialState: initialState,
  reducers: {
    setNewPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPets.fulfilled, (state, action) => {
        state.results = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getPets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPets.rejected, (state, action) => {
        state.error =
          action.error.message || "Unexpected error while getting pets";
        state.isLoading = false;
      });
  },
});

export const { setNewPage, setTotalPages } = petSlice.actions;
export default petSlice.reducer;
