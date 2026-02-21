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
  [theme.breakpoints.down('sm')]: {
    '&.MuiCardMedia-root': {
      maxHeight: '35px',
    },
  },
});



export const CardRootStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export const CardFooterStyle = (theme: Theme,darkTheme: boolean) => ({
  width: '100%',
  height: '40px',
  bgcolor: darkTheme ? COLORS.dark.secondary : COLORS.light.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'left',
  paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
  paddingRight: theme.spacing(SIZES.spacingNumeric.sm),
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    opacity: 0.8,
  },
});

export const CardVerticalCard = (theme: Theme, darkTheme: boolean) => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: SIZES.width.seriesCard,
  borderRadius: SIZES.borderRadius,
  boxShadow: 'none',
  overflow: 'hidden',
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
  display: 'block',
  whiteSpace: 'nowrap',
  padding: 0,
  fontWeight: FONT_WEIGHTS.bold,
  fontSize: FONT_SIZES.body1,
  lineHeight: LINE_HEIGHTS.normal,
  textShadow: 'none',
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,
    padding: 0,
  },
});
