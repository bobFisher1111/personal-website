import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: localStorage.getItem('darkMode') === 'true',
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newValue = !state.darkTheme;
      localStorage.setItem("darkMode", newValue ? "true" : "false");
      state.darkTheme = newValue;
    },
    setDarkTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },
  },
});

export const { toggleTheme, setDarkTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
