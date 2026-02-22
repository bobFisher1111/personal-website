import { Theme } from '@mui/material';
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
} from 'src/store/redux/theme/CONSTANTS';

export const CardMediaVerticalCardImage = (theme: Theme) => ({
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  aspectRatio: '16/9',
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    width: SIZES.width.seriesCardImage,
    height: 'auto',
  },
});



export const CardRootStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export const CardFooterStyle = (darkTheme: boolean) => ({
  width: '100%',
  height: SIZES.height.touchTarget,
  bgcolor: darkTheme ? COLORS.dark.secondary : COLORS.light.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'left',
});

export const CardVerticalCard = (theme: Theme, darkTheme: boolean, layout: 'grid' | 'scroller') => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: SIZES.width.seriesCard,
  borderRadius: SIZES.borderRadius,
  boxShadow: 'none',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    ...(layout === 'grid'
      ? {
          minWidth: 0,
          maxWidth: '100%',
        }
      : {
          width: SIZES.width.seriesCardMobile,
          minWidth: SIZES.width.seriesCardMobile,
          maxWidth: SIZES.width.seriesCardMobile,
        }),
  },
});

export const DivVerticalArticleRoot = (theme: Theme) => ({
  padding: theme.spacing(
    SIZES.spacingNumeric.sm,
    SIZES.spacingNumeric.sm,
    SIZES.spacingNumeric.sm,
    SIZES.spacingNumeric.sm,
  ),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(SIZES.spacingNumeric.xs),
  },
});

export const GridPadding = (theme: Theme) => ({
  padding: theme.spacing(SIZES.spacingNumeric.md),
});

export const TypographyVerticalCardNameStyle = (theme: Theme) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(SIZES.spacingNumeric.md),
  fontSize: FONT_SIZES.avatarName,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: LINE_HEIGHTS.normal,
});

export const TypographyVerticalCardNameStyleHover = (theme: Theme, darkTheme: boolean) => ({
  color: darkTheme ? COLORS.dark.primary : COLORS.light.secondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
  whiteSpace: 'nowrap',
  paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
  paddingRight: theme.spacing(SIZES.spacingNumeric.sm),
  boxSizing: 'border-box',
  fontWeight: FONT_WEIGHTS.bold,
  fontSize: FONT_SIZES.body1,
  lineHeight: LINE_HEIGHTS.normal,
  textShadow: 'none',
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,
    paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
    paddingRight: theme.spacing(SIZES.spacingNumeric.sm),
  },
});
