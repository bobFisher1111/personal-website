import { createTheme } from "@mui/material";
import {
  APP_BAR_BACKGROUND_COLOR,
  DARK_PRIMARY,
  DARK_SECONDARY,
  LIGHT_PRIMARY,
  LIGHT_SECONDARY,
} from './CONSTANTS';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: LIGHT_PRIMARY,
    },
    secondary: {
      main: LIGHT_SECONDARY,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: APP_BAR_BACKGROUND_COLOR
        }
      },
    },
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: DARK_PRIMARY,
    },
    secondary: {
      main: DARK_SECONDARY,
    },
    background: {
    },
  },
});
