import type { SxProps, Theme } from "@mui/material";
import { COLORS, SIZES } from "src/store/redux/theme/CONSTANTS";

export type ScrollArrowDirection = "left" | "right";

export const ScrollArrowButtonStyles = (
  isDark: boolean,
  direction: ScrollArrowDirection
): SxProps<Theme> => ({
  position: "absolute",
  ...(direction === "left" ? { left: 0 } : { right: 0 }),
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  width: SIZES.height.touchTarget,
  height: SIZES.height.touchTarget,
  bgcolor: isDark ? COLORS.dark.secondary : COLORS.light.secondary,
  border: `1px solid ${isDark ? COLORS.dark.primary : COLORS.light.primary}`,
  borderRadius: SIZES.borderRadius,
  "&:hover": {
    bgcolor: isDark ? COLORS.dark.secondary : COLORS.light.secondary,
  },
});

export const ScrollArrowIconStyles = (isDark: boolean): SxProps<Theme> => ({
  color: isDark ? COLORS.dark.primary : COLORS.light.primary,
});
