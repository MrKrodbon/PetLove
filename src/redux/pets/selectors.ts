import { StoreType } from "../store";

export const selectPets = (state: StoreType) => state.pets;
export const selectPetsPage = (state: StoreType) => state.pets.page;
export const seelctPetsTotalPages = (state: StoreType) => state.pets.totalPages;
