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
  },
});

export const { openMenu, closeMenu } = uiSlice.actions;
export default uiSlice.reducer;
