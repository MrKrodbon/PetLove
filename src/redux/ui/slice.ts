import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isHomePage: false,
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
    setIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu, setIsHomePage } =
  uiSlice.actions;
export default uiSlice.reducer;
