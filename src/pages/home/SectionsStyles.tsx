import { Theme } from "@mui/material";
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SIZES, SPACING_VALUES } from "src/store/redux/theme/CONSTANTS";

export const navContainerStyles = (theme: Theme, isDarkTheme: boolean) => {
  return {
    width: "100%",
    backgroundColor: isDarkTheme ? COLORS.dark.appBar : COLORS.light.primary,
    marginBottom: SPACING_VALUES.md,
    borderRadius: 1,
    border: `1px solid ${isDarkTheme ? COLORS.dark.appBar : COLORS.light.primary}`,
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    [theme.breakpoints.down("sm")]: {
      marginBottom: SPACING_VALUES.sm,
  },
  };
};
export const tabsStyles = (isDarkTheme: boolean) => ({
  minHeight: 28,
  '& .MuiTabs-indicator': {
    height: 0,
    backgroundColor: 'transparent',
  },
});

export const tabStyles = (
  activeSection: string,
  section: string,
  isDarkTheme: boolean
) => ({
  textTransform: 'none' as const,
  minWidth: 'auto',
  marginRight: '1px',
  paddingInline: 4,
  paddingBlock: 0,
  fontSize: FONT_SIZES.body2,
  fontWeight: FONT_WEIGHTS.bold,
  borderRadius:
    activeSection === section && isDarkTheme
      ? SIZES.borderRadius
      : 0,
  backgroundColor:
    activeSection === section
      ? (isDarkTheme ? 'transparent' : COLORS.light.secondary)
      : 'transparent',
  border:
    activeSection === section
      ? `1px solid ${isDarkTheme ? COLORS.dark.text.primary : COLORS.light.secondary}`
      : '1px solid transparent',
  color:
    activeSection === section
      ? (isDarkTheme ? COLORS.dark.text.primary : COLORS.light.primary)
      : (isDarkTheme ? COLORS.dark.text.secondary : COLORS.light.secondary),
  '&:hover': {
    backgroundColor: isDarkTheme ? 'transparent' : COLORS.light.secondary,
    border: `1px solid ${isDarkTheme ? COLORS.dark.text.primary : COLORS.light.secondary}`,
    color: isDarkTheme ? COLORS.dark.text.primary : COLORS.light.primary,
    borderRadius: isDarkTheme ? SIZES.borderRadius : 0,
  },
});

export default [navContainerStyles, tabsStyles, tabStyles];
