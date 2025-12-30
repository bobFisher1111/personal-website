import { Theme } from "@mui/material";
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
} from "src/store/redux/theme/CONSTANTS";

export const GridRoot = (theme: Theme) => ({
  display: "flex",
  margin: "auto",
  padding: theme.spacing(SIZES.spacingNumeric.xxl, SIZES.spacingNumeric.md, 25),
  width: SIZES.width.full,
  maxWidth: SIZES.maxWidth.appBar,

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(
      SIZES.spacingNumeric.contentPad,
      SIZES.spacingNumeric.md,
      SIZES.spacingNumeric.sm
    ),
    width: SIZES.width.full,
  },

  [theme.breakpoints.up("md")]: {
    height: "500px",
    width: "calc(100vw - 16px)",
  },
});

export const SectionNotSelectedStyles = (isDark: boolean, theme: Theme) => ({
  color: isDark ? COLORS.dark.secondary : COLORS.light.primary,
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  fontSize: FONT_SIZES.sectionTitle,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

export const SectionSelectedStyles = (isDark: boolean, theme: Theme) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.25, 0.5),
  borderRadius: theme.shape.borderRadius,
  border: isDark ? `1px solid ${COLORS.dark.primary}` : "",
  color: isDark ? COLORS.dark.secondary : COLORS.light.primary,
  background: isDark ? COLORS.dark.secondary : COLORS.light.primary,
  fontSize: FONT_SIZES.sectionTitle,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
});

export const SectionTextStyles = (theme: Theme) => ({
  fontSize: FONT_SIZES.sectionTitle,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: LINE_HEIGHTS.normal,
  [theme.breakpoints.down("sm")]: {
    fontSize: FONT_SIZES.sectionTitle,
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

