import { Theme } from "@mui/material";
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
} from "src/store/redux/theme/CONSTANTS";

// ✅ Responsive layout using MUI breakpoints and constants
export const GridRoot = (theme: Theme) => ({
  display: "flex",
  margin: "auto",
  padding: theme.spacing(SIZES.spacingNumeric.xxl, SIZES.spacingNumeric.md, 25), // 180px 32px 400px
  width: SIZES.width.full,
  maxWidth: SIZES.maxWidth.appBar,

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(
      SIZES.spacingNumeric.contentPad, // 152px
      SIZES.spacingNumeric.md,         // 32px
      SIZES.spacingNumeric.sm          // 16px
    ),
    width: SIZES.width.full,
  },

  [theme.breakpoints.up("md")]: {
    height: "500px",
    width: "calc(100vw - 16px)",
  },
});
//
export const SectionNotSelectedStyles = (isDark: boolean, theme: Theme) => ({
  color: isDark ? "#9DB2BF" : "#0C0D0D",
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  fontSize: FONT_SIZES.sectionTitle,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});
//
export const SectionSelectedStyles = (isDark: boolean, theme: Theme) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.25, 0.5),
  borderRadius: theme.shape.borderRadius,
  border: isDark ? "1px solid #9DB2BF" : "",
  color: isDark ? "#9DB2BF" : "white",
  background: "#0C0D0D",
  fontSize: FONT_SIZES.sectionTitle,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

// ✅ Section title styling
export const SectionTextStyles = (theme: Theme) => ({
  fontSize: FONT_SIZES.sectionTitle,       // 1.25rem = 20px
  fontWeight: FONT_WEIGHTS.regular,        // 400
  lineHeight: LINE_HEIGHTS.normal,         // 1.5rem = 24px
  [theme.breakpoints.down("sm")]: {
    fontSize: FONT_SIZES.sectionTitle,
  },
});

// ✅ Button style override
export const SeriesButtonStyles = () => ({
  textTransform: "initial",
  "&.MuiButtonBase-root": {
    "&.MuiButton-root": {
      padding: 0,
    },
  },
});

// ✅ Title styling
// export const SeriesTextStyles = (theme: Theme) => ({
//   fontSize: FONT_SIZES.title,              // 1.25rem = 20px
//   fontWeight: FONT_WEIGHTS.bold,           // 700
//   lineHeight: LINE_HEIGHTS.normal,         // 1.5rem = 24px
//   [theme.breakpoints.down("sm")]: {
//     fontSize: FONT_SIZES.title,
//   },
// });
