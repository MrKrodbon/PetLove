import { store, StoreType } from "../store";

export const selectIsBurgerMenuOpen = (state: StoreType) => state.ui.isOpen;

export const selectIsHomePage = (state: StoreType) => state.ui.isHomePage;
