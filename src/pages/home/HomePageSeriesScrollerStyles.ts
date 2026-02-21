import { SIZES } from "src/store/redux/theme/CONSTANTS";

export const SeriesScrollerRootStyles = () => ({
  position: "relative",
});

export const SeriesScrollerStyles = () => ({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  px: SIZES.spacingNumeric.md,
  "& .MuiGrid-container": {
    flexWrap: "nowrap",
  },
});
