import { createTheme } from "@mui/material";
import { COLORS } from './CONSTANTS';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.light.primary,
    },
    secondary: {
      main: COLORS.light.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.light.appBar
        }
      },
    },
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.dark.primary,
    },
    secondary: {
      main: COLORS.dark.secondary,
    },
    background: {
    },
  },
});
