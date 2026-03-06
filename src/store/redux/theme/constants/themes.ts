import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.light.primary,
      light: COLORS.light.accent.green3,
      dark: COLORS.light.accent.green4,
    },
    secondary: {
      main: COLORS.light.secondary,
      light: COLORS.light.accent.green1,
    },
    background: {
      default: COLORS.light.secondary,
      paper: COLORS.light.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.light.appBar,
        },
      },
    },
  },
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
      default: COLORS.dark.secondary,
      paper: COLORS.dark.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.dark.appBar,
          backgroundImage: "none",
        },
      },
    },
  },
});
