import { COLORS, FONT_SIZES, FONT_WEIGHTS, SIZES } from "src/store/redux/theme/CONSTANTS";

export const navContainerStyles = (isDarkTheme: boolean) => {
  return {
    width: "100%",
    // Light mode: primary green band.
    // Dark mode: use appBar (very dark) so selected pills can be lighter.
    backgroundColor: isDarkTheme ? COLORS.dark.appBar : COLORS.light.primary,
    marginBottom: 4,
    borderRadius: 1,
    border: `1px solid ${isDarkTheme ? COLORS.dark.appBar : COLORS.light.primary}`,
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };
};
export const tabsStyles = (isDarkTheme: boolean) => ({
  // Make the tab strip compact with a thin indicator
  minHeight: 28,
  '& .MuiTabs-indicator': {
    // Hide the default MUI indicator to avoid a solid green block;
    // selection is shown via the tab border instead.
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
