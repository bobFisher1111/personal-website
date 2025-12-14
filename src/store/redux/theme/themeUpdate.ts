// src/theme/theme.ts
import { createTheme, ThemeOptions } from '@mui/material';
import { COLORS, FONT_SIZES } from './CONSTANTS';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const palette = {
    mode,
    primary: { main: COLORS[mode].primary },
    secondary: { main: COLORS[mode].secondary },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: COLORS[mode].text,
  };

  const typography = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: FONT_SIZES.h1 },
    h2: { fontSize: FONT_SIZES.h2 },
    h3: { fontSize: FONT_SIZES.h3 },
    body1: { fontSize: FONT_SIZES.body1 },
    body2: { fontSize: FONT_SIZES.body2 },
  };

  const components = {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS[mode].appBar,
        },
      },
    },
  };

  return createTheme({
    palette,
    typography,
    components,
  } as ThemeOptions);
};
