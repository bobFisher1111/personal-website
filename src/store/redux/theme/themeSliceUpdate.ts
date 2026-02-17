import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  darkTheme: boolean;
};

const getInitialTheme = (): boolean => {
  const stored = localStorage.getItem('darkMode');
  return stored === 'true';
};

const initialState: ThemeState = {
  darkTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem('darkMode', String(state.darkTheme));
    },
    setTheme(state, action: PayloadAction<boolean>) {
      state.darkTheme = action.payload;
      localStorage.setItem('darkMode', String(action.payload));
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
