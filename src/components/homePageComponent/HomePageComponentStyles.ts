import { Theme } from "@mui/material";

export const CarouselGrid = (theme: Theme) => ({
  padding: theme.spacing(4, 0, 2),
  [theme.breakpoints.between(601, 1024)]: {
    '@media (orientation: landscape)': {
      padding: theme.spacing(2, 0, 1),
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 0, 0),
  },
});

export const GridAlignItems = (theme: Theme) => ({
  padding: theme.spacing(7.5, 2),
  width: "1200px",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 0, 25),
    width: "100vw",
  },
});

export const GridRoot = (theme: Theme) => ({
  display: "flex",
  margin: "auto",
  padding: theme.spacing(11.25, 2, 25),
  width: "100%",
  maxWidth: "1200px",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(9.5, 2, 1),
    width: "100vw",
  },
  "@media (min-width:1024px) and (max-height:1366px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:1.5)": {
    height: "500px",
    width: "calc(100vw - 16px)",
  },

  "@media (max-device-width:812px) and (orientation:landscape)": {
    width: "100vw",
  },
});


export const HeaderTitleStyles = (theme: Theme) => ({
  textAlign: "center",
  fontSize: "36px",
  lineHeight: "40px",
  paddingTop: theme.spacing(3.125),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
});

export const HomePageImage = (theme: Theme) => ({
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(1.5),
  },
});

export const LatestTextStyles = (theme: Theme) => ({
  fontSize: "22px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

export const SectionNotSelectedStyles = (isDark: boolean, theme: Theme) => ({
  color: isDark ? "#9DB2BF" : "#0C0D0D",
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  fontSize: "22px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

export const SectionSelectedStyles = (isDark: boolean, theme: Theme) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.25, 0.5),
  borderRadius: theme.shape.borderRadius,
  border: isDark ? "1px solid #9DB2BF" : "",
  color: isDark ? "#9DB2BF" : "white",
  background: "#0C0D0D",
  fontSize: "22px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

export const SeriesIconStyles = (theme: Theme) => ({
  fontSize: "26px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
});

export const SeriesButtonStyles = () => ({
  textTransform: "initial",
  "&.MuiButtonBase-root": {
    "&.MuiButton-root": {
      padding: 0,
    },
  },
});

export const SeriesGridStyles = (theme: Theme) => ({
  width: "1200px",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
  },
});

export const SeriesTextStyles = (theme: Theme) => ({
  fontSize: "22px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});
