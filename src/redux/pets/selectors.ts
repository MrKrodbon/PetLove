import { StoreType } from "../store";

export const selectPets = (state: StoreType) => state.pets;
export const selectPetsPage = (state: StoreType) => state.pets.page;
export const seelctPetsTotalPages = (state: StoreType) => state.pets.totalPages;

export const selectPetsCategories = (state: StoreType) =>
  state.pets.filterOptions.categoryOptions;

export const selectPetsSex = (state: StoreType) =>
  state.pets.filterOptions.sexOptions;

export const selectPetsSpecies = (state: StoreType) =>
  state.pets.filterOptions.speciesOptions;

export const selectCities = (state: StoreType) =>
  state.pets.filterOptions.cities;

export const selectFilterParams = (state: StoreType) => state.pets.filters;
