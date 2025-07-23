import { CaseReducer, createSlice } from "@reduxjs/toolkit";

import { PetState } from "@/types/types";
import {
  getPets,
  getPetsCategories,
  getPetsSex,
  getPetsSpecies,
  getUkrainianCities,
} from "./operations";

const initialState: PetState = {
  results: [],
  filterOptions: {},
  filters: {},
  page: 1,
  perPage: 1,
  totalPages: 0,
  isLoading: false,
  error: "",
};

type PetsRejected =
  | ReturnType<typeof getPets.rejected>
  | ReturnType<typeof getUkrainianCities.rejected>
  | ReturnType<typeof getPetsCategories.rejected>;

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
    handleSearch: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    const toPending = (state: PetState) => {
      state.isLoading = true;
    };

    const toRejected: CaseReducer<PetState, PetsRejected> = (state, action) => {
      state.isLoading = false;
      state.error =
        action.error.message ?? "Unexpected error while getting pets";
    };

    builder
      .addCase(getPets.fulfilled, (state, action) => {
        state.results = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getPetsCategories.fulfilled, (state, action) => {
        state.filterOptions.categoryOptions = action.payload;
        state.isLoading = false;
      })

      .addCase(getPetsSex.fulfilled, (state, action) => {
        state.filterOptions.sexOptions = action.payload;
        state.isLoading = false;
      })
      .addCase(getPetsSpecies.fulfilled, (state, action) => {
        state.filterOptions.speciesOptions = action.payload;
        state.isLoading = false;
      })
      .addCase(getUkrainianCities.fulfilled, (state, action) => {
        state.filterOptions.cities = action.payload;
        state.isLoading = false;
      })
      .addCase(getPets.pending, toPending)
      .addCase(getPetsCategories.pending, toPending)
      .addCase(getPetsSex.pending, toPending)
      .addCase(getPetsSpecies.pending, toPending)
      .addCase(getUkrainianCities.pending, toPending)

      .addCase(getPets.rejected, toRejected)
      .addCase(getPetsCategories.rejected, toRejected)
      .addCase(getPetsSex.rejected, toRejected)
      .addCase(getPetsSpecies.rejected, toRejected)
      .addCase(getUkrainianCities.rejected, toRejected);
  },
});

export const { setNewPage, setTotalPages, handleSearch } = petSlice.actions;
export default petSlice.reducer;
