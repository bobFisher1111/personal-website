import { createSlice } from "@reduxjs/toolkit";

const convertToString = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    return true;
  }
  if (localStorage.getItem('darkMode') === 'false') {
    return false;
  }
};

const initialState = {
  darkTheme: convertToString(),
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (!state.darkTheme) {
        localStorage.setItem("darkMode", 'true');
      } else {
        localStorage.setItem("darkMode", 'false');
      }
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
