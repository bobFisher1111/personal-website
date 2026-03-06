import { FONT_SIZES } from "./typography";

const SPACING_REM = {
  xxs: "0.25rem", // 4px
  xs: "0.5rem", // 8px
  sm: "1rem", // 16px
  md: "2rem", // 32px
  titlePad: "3.125rem", // 50px
};

const SPACING_UNIT = {
  xxs: 0.25,
  xs: 0.5,
  sm: 1,
  md: 2,
};

export const SIZES = {
  borderRadius: "0.375rem", // 6px
  border: "0.0625rem solid", // 1px
  fontSize: {
    articleTitle: FONT_SIZES.h3, // 28px
    articleSubtitle: FONT_SIZES.sectionTitle, // 20px
  },
  avatar: {
    sm: "1.25rem", // 20px
  },
  chip: {
    heightSm: "1.5rem", // 24px
    borderRadius: "0.25rem", // 4px
    fontSizeSm: "0.625rem", // 10px
    containerHeightMobile: "1.75rem", // 28px
  },
  maxWidth: {
    appBar: "54rem",
    screenWidth: "54rem",
    pageContainer: "52rem",
  },
  padding: {
    linkGridMobile: "0.25rem 1rem 0.25rem 0rem",
    desktopTitle: "0rem 0rem 0rem 1rem",
    cardLarge: "1.5rem",
    cardSmall: "0.375rem",
    articlePageRoot: "0.5rem 0px 0px 0px",
  },
  spacing: SPACING_REM,
  spacingNumeric: SPACING_UNIT,
  width: {
    full: "100%",
    imageMax: "18.75rem",
    seriesCardImage: "11.25rem",
    seriesCard: "11.25rem",
    seriesCardMobile: "8.75rem",
    horizontalCardContainer: "41.25rem",
    horizontalCardMedium: "46.875rem",
  },
  height: {
    appBar: "2.5rem",
    touchTarget: "2.75rem",
    seriesCardFooter: "4.5rem",
    articleTallExact: "7.172rem",
    horizontalCard: "11.25rem",
    horizontalCardSm: "10.375rem",
    rootTall: "12rem",
    rootSm: "8.75rem",
    socialMediaIcons: "1rem",
  },
  imageAspectRatio16by9: {
    width: "18.75rem",
    height: "10.5625rem",
  },
};
