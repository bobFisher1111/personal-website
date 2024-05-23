import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#0C0D0D',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF'
        }
      },
    },
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#9DB2BF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
    },
  },
});
