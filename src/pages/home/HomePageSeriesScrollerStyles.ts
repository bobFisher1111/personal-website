import { SIZES } from "src/store/redux/theme/CONSTANTS";

export const SeriesScrollerRootStyles = () => ({
  position: "relative",
});

export const SeriesScrollerStyles = () => ({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  overscrollBehaviorX: "contain",
  scrollSnapType: "x mandatory",
  scrollPaddingLeft: 0,
  scrollPaddingRight: SIZES.height.touchTarget,
  pl: 0,
  pr: SIZES.height.touchTarget,
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  "& .MuiGrid-container": {
    flexWrap: "nowrap",
  },
  "& .carouselOne1": {
    flexWrap: "nowrap",
    width: "fit-content",
  },
  "& .MuiGrid-item, & .MuiGrid2-root": {
    flex: "0 0 auto",
    scrollSnapAlign: "start",
  },
});
