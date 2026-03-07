import { Theme } from "@mui/material";
import type { CSSProperties } from "react";
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
} from "src/store/redux/theme/CONSTANTS";

export const SeriesImageContainerStyles: CSSProperties = {
  position: "relative",
  width: "100%",
};

export const AuthorAvatarOverlayLinkStyles: CSSProperties = {
  position: "absolute",
  top: SIZES.spacing.xxs,
  right: SIZES.spacing.xxs,
  zIndex: 1,
  display: "inline-flex",
  borderRadius: "50%",
  textDecoration: "none",
  WebkitTapHighlightColor: "transparent",
};

export const AuthorAvatarOverlayImageStyles = (
  darkTheme: boolean,
): CSSProperties => ({
  width: SIZES.avatar.sm,
  height: SIZES.avatar.sm,
  borderRadius: "50%",
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  objectFit: "cover",
  backgroundColor: darkTheme ? COLORS.dark.appBar : COLORS.light.secondary,
});

export const CardMediaVerticalCardImage = (_theme: Theme) => ({
  objectFit: "cover",
  width: "100%",
  height: "auto",
  aspectRatio: "16/9",
  display: "block",
});

export const CardRootStyle = {
  display: "flex",
  flexDirection: "column",
};

export const CardFooterStyle = (theme: Theme, darkTheme: boolean) => ({
  width: "100%",
  height: SIZES.height.seriesCardFooter,
  bgcolor: darkTheme ? COLORS.dark.secondary : COLORS.light.primary,
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(0.5),
});

export const CardVerticalCard = (
  theme: Theme,
  darkTheme: boolean,
  layout: "grid" | "scroller",
) => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: layout === "grid" ? "100%" : SIZES.width.seriesCard,
  ...(layout === "grid" ? { maxWidth: SIZES.width.imageMax } : {}),
  borderRadius: SIZES.borderRadius,
  boxShadow: "none",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    ...(layout === "grid"
      ? {
          minWidth: 0,
          maxWidth: "100%",
        }
      : {
          width: SIZES.width.seriesCardMobile,
          minWidth: SIZES.width.seriesCardMobile,
          maxWidth: SIZES.width.seriesCardMobile,
        }),
  },
});

export const DivVerticalArticleRoot = (
  theme: Theme,
  layout: "grid" | "scroller",
) => ({
  padding:
    layout === "scroller"
      ? theme.spacing(SIZES.spacingNumeric.xs)
      : theme.spacing(SIZES.spacingNumeric.sm),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(SIZES.spacingNumeric.xs),
  },
});

export const GridPadding = (theme: Theme) => ({
  padding: theme.spacing(SIZES.spacingNumeric.md),
});

export const TypographyVerticalCardNameStyle = (theme: Theme) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  padding: theme.spacing(SIZES.spacingNumeric.md),
  fontSize: FONT_SIZES.avatarName,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: LINE_HEIGHTS.normal,
});

export const TypographyVerticalCardNameStyleHover = (
  theme: Theme,
  darkTheme: boolean,
) => ({
  color: darkTheme ? COLORS.dark.primary : COLORS.light.secondary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  whiteSpace: "normal",
  paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
  paddingRight: theme.spacing(SIZES.spacingNumeric.sm),
  boxSizing: "border-box",
  fontWeight: FONT_WEIGHTS.bold,
  fontSize: FONT_SIZES.body1,
  lineHeight: LINE_HEIGHTS.normal,
  textShadow: "none",
  width: "100%",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: FONT_SIZES.base,
    paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
    paddingRight: theme.spacing(SIZES.spacingNumeric.sm),
  },
});
