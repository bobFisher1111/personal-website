import { COLORS, FONT_SIZES, FONT_WEIGHTS } from "src/store/redux/theme/CONSTANTS";

export const getColorVariables = (isDarkTheme: boolean) => ({
  textColor: isDarkTheme ? COLORS.dark.text.primary : COLORS.light.text.primary,
  borderColor: isDarkTheme ? COLORS.dark.primary : COLORS.light.accent.green3,
  hoverBg: isDarkTheme ? COLORS.dark.primary : COLORS.light.accent.green1,
  hoverText: isDarkTheme ? COLORS.dark.text.primary : COLORS.light.text.primary,
});

export const navContainerStyles = (isDarkTheme: boolean) => {
  const { borderColor } = getColorVariables(isDarkTheme);
  return {
    width: "100%",
    backgroundColor: isDarkTheme ? COLORS.dark.appBar : COLORS.light.secondary,
    marginBottom: 4,
    borderRadius: 1,
    border: `1px solid ${borderColor}`,
    py: 1,
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };
};

export const mobileScrollBoxStyles = {
  display: "flex",
  gap: 1,
  overflowX: "auto" as const,
  overflowY: "hidden" as const,
  whiteSpace: "nowrap" as const,
  width: "100%",
  py: 0.5,
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const mobileButtonStyles = (
  activeSection: string,
  section: string,
  isDarkTheme: boolean,
  borderColor: string,
  hoverBg: string,
  hoverText: string,
  textColor: string
) => ({
  flexShrink: 0,
  fontSize: '0.85rem',
  fontWeight: FONT_WEIGHTS.bold,
  px: 2,
  py: 0.75,
  borderRadius: 2,
  textTransform: "none" as const,
  backgroundColor: activeSection === section ? hoverBg : isDarkTheme ? COLORS.dark.secondary : `${borderColor}20`,
  color: activeSection === section ? isDarkTheme ? COLORS.dark.secondary : hoverText : textColor,
  border: `1px solid ${borderColor}`,
  cursor: "pointer",
  transition: 'all 0.2s ease',
  WebkitTapHighlightColor: 'transparent',
});

export const desktopScrollBoxStyles = (isDarkTheme: boolean) => ({
  display: "flex",
  gap: 3,
  overflowX: "auto" as const,
  whiteSpace: "nowrap" as const,
  scrollbarWidth: "thin" as const,
  "&::-webkit-scrollbar": {
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: isDarkTheme ? COLORS.dark.primary : COLORS.light.primary,
    borderRadius: 2,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: isDarkTheme ? COLORS.dark.appBar : COLORS.light.secondary,
  },
});

export const desktopButtonStyles = (
  activeSection: string,
  section: string,
  isDarkTheme: boolean
) => ({
  textTransform: "none" as const,
  fontWeight: FONT_WEIGHTS.bold,
  fontSize: FONT_SIZES.body1,
  color: activeSection === section 
    ? isDarkTheme ? COLORS.dark.secondary : COLORS.light.secondary
    : isDarkTheme ? COLORS.dark.primary : COLORS.light.primary,
  flexShrink: 0,
  transition: 'color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
  backgroundColor: activeSection === section
    ? isDarkTheme ? COLORS.dark.primary : COLORS.light.primary
    : 'transparent',
  border: `1px solid transparent`,
  borderRadius: activeSection === section ? 1 : 0,
  WebkitTapHighlightColor: 'transparent',
  "&:hover": {
    color: isDarkTheme ? COLORS.dark.primary : COLORS.light.secondary,
    backgroundColor: isDarkTheme ? COLORS.dark.secondary : COLORS.light.accent.green2,
    borderColor: isDarkTheme ? COLORS.dark.primary : COLORS.light.primary,
    borderRadius: 1,
  },
  "&:active": {
    color: isDarkTheme ? COLORS.dark.primary : COLORS.light.secondary,
    backgroundColor: isDarkTheme ? COLORS.dark.secondary : COLORS.light.accent.green2,
    borderColor: isDarkTheme ? COLORS.dark.primary : COLORS.light.primary,
  },
});

export default [navContainerStyles, mobileScrollBoxStyles, mobileButtonStyles, desktopScrollBoxStyles, desktopButtonStyles, getColorVariables];
