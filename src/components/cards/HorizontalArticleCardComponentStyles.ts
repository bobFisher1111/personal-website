import { Theme } from "@mui/material/styles";
import { COLORS, SIZES } from "src/store/redux/theme/CONSTANTS";

export const articlePageRoot = (theme: Theme) => ({
  padding: SIZES.padding.articlePageRoot,
  [theme.breakpoints.down("sm")]: {
    padding: `${SIZES.spacing.xs} ${SIZES.spacing.xs} 0px ${SIZES.spacing.xs}`,
  },
});

export const cardGrid = (theme: Theme) => ({
  height: SIZES.height.horizontalCard,
  [theme.breakpoints.down("sm")]: {
    padding: SIZES.spacing.xs,
    height: SIZES.height.horizontalCardSm,
  },
});

export const cardHorizontalArticleInfo = (articlePageList: boolean) => ({
  height: SIZES.height.horizontalCard,
  boxShadow: "none",
  padding: !articlePageList ? `0px 0px 0px ${SIZES.padding.cardLarge}` : "",
  "@media (min-width:900px)": {
    width: SIZES.width.horizontalCardContainer,
  },
  "@media (max-width:600px)": {
    padding: SIZES.spacing.xs,
  },
});

export const gridHorizontalArticleContainer = (theme: Theme) => ({
  width: "100%",
  display: "flex",
  margin: `0px 0px ${SIZES.spacing.sm} 0px`,
  [theme.breakpoints.down("sm")]: {
    padding: `${SIZES.padding.cardSmall} 0px 0px 0px`,
  },
});

export const gridHorizontalArticleMaxWidth = (
  theme: Theme,
  imageWidth: string,
) => ({
  maxWidth: imageWidth,
  "@media (min-width:1024px) and (max-width:1199px)": {
    maxWidth: SIZES.width.horizontalCardMedium,
  },
  [theme.breakpoints.down("md")]: {
    height: undefined,
  },
});

export const imageHorizontalArticleStyles = (
  theme: Theme,
  darkTheme: boolean,
) => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  borderRadius: SIZES.borderRadius,
  height: "auto",
  objectFit: "cover",
  aspectRatio: "16/9",
  width: "100%",
  maxWidth: SIZES.maxWidth.pageContainer,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    marginTop: 0,
    paddingTop: 0,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: SIZES.maxWidth.appBar,
  },
});
