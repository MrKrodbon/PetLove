import { StoreType } from "../store";

export const selectIsBurgerMenuOpen = (state: StoreType) => state.ui.isOpen;
