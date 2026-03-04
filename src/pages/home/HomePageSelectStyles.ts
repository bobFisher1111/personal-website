import { COLORS, SPACING_VALUES } from "src/store/redux/theme/CONSTANTS";

export type ThemeMode = "light" | "dark";

export const HomePageSelectFormControlSx = (minWidth: number) => ({
  m: 1,
  minWidth,
});

export const HomePageSelectMenuPaperSx = (mode: ThemeMode) => ({
  border: `1px solid ${COLORS.common.border}`,
  "& .MuiMenuItem-root": {
    justifyContent: "flex-start",
    textAlign: "left",
    whiteSpace: "normal",
    wordBreak: "break-word",
    color: COLORS[mode].primary,
  },
});

export const HomePageSelectSx = (mode: ThemeMode) => ({
  textAlign: "left",
  color: COLORS[mode].primary,
  maxWidth: "100%",
  "& .MuiSelect-select": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingRight: SPACING_VALUES.md,
  },
  "& .MuiSelect-select:focus": {
    backgroundColor: "transparent",
  },
  "&.MuiInput-underline:before": {
    borderBottomWidth: "2px",
    borderBottomColor: COLORS[mode].primary,
  },
  "&.MuiInput-underline:after": {
    borderBottomWidth: "2px",
    borderBottomColor: COLORS[mode].primary,
  },
  "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomWidth: "2px",
    borderBottomColor: COLORS[mode].primary,
  },
  "& .MuiSelect-icon": {
    color: COLORS[mode].primary,
  },
});
