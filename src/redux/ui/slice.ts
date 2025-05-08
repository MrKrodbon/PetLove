import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const uiSlice = createSlice({
  name: "burgerMenu",
  initialState: initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
