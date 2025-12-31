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
  [theme.breakpoints.up('sm')]: {
    width: SIZES.width.seriesCardImage,
    height: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    '&.MuiCardMedia-root': {
      maxHeight: '35px',
    },
  },
});



export const CardRootStyle = {
  position: 'relative',
};

export const CardFooterStyle = (theme: Theme,darkTheme: boolean) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: darkTheme ? COLORS.dark.secondary : COLORS.light.primary,
  [theme.breakpoints.down('sm')]: {
    opacity: 0.8,
  },
});

export const CardVerticalCard = (theme: Theme, darkTheme: boolean) => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: SIZES.width.seriesCard,
  borderRadius: SIZES.borderRadius,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'calc(100vw - 32px)',
    maxWidth: 'calc(100vw - 32px)',
  },
});

export const DivVerticalArticleRoot = (theme: Theme) => ({
  padding: theme.spacing(
    SIZES.spacingNumeric.sm,
    SIZES.spacingNumeric.sm,
    SIZES.spacingNumeric.sm,
    SIZES.spacingNumeric.sm,
  ),
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
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(SIZES.spacingNumeric.sm),
  fontWeight: FONT_WEIGHTS.bold,
  fontSize: FONT_SIZES.body1,
  lineHeight: LINE_HEIGHTS.normal,
  textShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,
    padding: theme.spacing(SIZES.spacingNumeric.sm),
  },
});
