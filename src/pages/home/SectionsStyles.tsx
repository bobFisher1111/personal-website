import { Theme } from "@mui/material";
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SIZES, SPACING_VALUES } from "src/store/redux/theme/CONSTANTS";

const MOBILE_TAB_HEIGHT = '2.25rem';

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
  minHeight: { xs: MOBILE_TAB_HEIGHT, sm: SIZES.height.touchTarget },
  '& .MuiTab-root': {
    minHeight: { xs: MOBILE_TAB_HEIGHT, sm: SIZES.height.touchTarget },
  },
  '& .MuiTabs-indicator': {
    height: 0,
    backgroundColor: 'transparent',
  },
});

export const tabStyles = (
  theme: Theme,
  activeSection: string,
  section: string,
  isDarkTheme: boolean
) => ({
  textTransform: 'none' as const,
  minWidth: 'auto',
  marginRight: '1px',
  minHeight: { xs: MOBILE_TAB_HEIGHT, sm: SIZES.height.touchTarget },
  paddingInline: theme.spacing(1.5),
  paddingBlock: theme.spacing(0.5),
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
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.25,
    paddingInline: theme.spacing(1),
    paddingBlock: theme.spacing(0.25),
  },
});

export default [navContainerStyles, tabsStyles, tabStyles];
