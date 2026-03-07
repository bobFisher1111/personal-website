import { Theme } from "@mui/material";
import { COLORS, FONT_SIZES } from "src/store/redux/theme/CONSTANTS";

export const GridTabsComponent = (
  theme: Theme,
  turnonsectiontabspadding: boolean,
) => ({
  padding: turnonsectiontabspadding ? "16px 0px 16px 0px" : "0px 0px 16px 0px",

  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
});

export const TabComponentTextStyles = (theme: Theme, darkTheme: boolean) => ({
  textTransform: "initial",
  fontSize: FONT_SIZES.sectionTitle,
  color: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
  opacity: 1,

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    fontWeight: "bold",
    "&.MuiButtonBase-root": {
      padding: "0px",
    },
  },
});

export const TabPanelStyle = {
  p: 3,
};

export const TabsChangeStyle = (theme: Theme, darkTheme: boolean) => ({
  width: "100%",
  "& .MuiBox-root": {
    padding: "0px",
  },
  "& .MuiTab-root": {
    opacity: 1,
  },
  "& .MuiTabs-flexContainer": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiTabs-indicator": {
    border: "1px",
  },
  "& button[aria-selected='true']": {
    borderBottom: `3px solid ${darkTheme ? COLORS.dark.primary : COLORS.common.border}`,
  },

  [theme.breakpoints.down("sm")]: {
    // Reserved for future mobile-specific overrides
  },
});
