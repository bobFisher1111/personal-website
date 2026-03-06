import { Theme } from "@mui/material";
import {
  COLORS,
  FONT_SIZES,
  SIZES,
} from "src/store/redux/theme/CONSTANTS";

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

export const SeriesTitleGridStyles = (theme: Theme) => ({
  marginBottom: SIZES.spacing.md,
  [theme.breakpoints.down("sm")]: {
    marginBottom: SIZES.spacing.sm,
  },
});
