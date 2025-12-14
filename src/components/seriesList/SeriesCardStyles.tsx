import { Theme } from '@mui/material';
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
} from '../../store/redux/theme/CONSTANTS';

// export const CardMediaVerticalCardImage = (theme: Theme) => ({
//   [theme.breakpoints.up('sm')]: {
//     height: '160px', // fixed height for medium+ screens
//   },
//   [theme.breakpoints.down('sm')]: {
//     '&.MuiCardMedia-root': {
//       maxHeight: '35px', // compact image for small screens
//     },
//   },
// });
// export const CardMediaVerticalCardImage = () => ({
//   width: SIZES.imageAspectRatio16by9.width,
//   height: SIZES.imageAspectRatio16by9.height,
//   objectFit: 'cover',
// });

export const CardMediaVerticalCardImage = (theme: Theme) => ({
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: SIZES.imageAspectRatio16by9.width,
    height: SIZES.imageAspectRatio16by9.height,
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

export const CardFooterStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: COLORS.light.primary, // '#0C0D0D'
  opacity: 0.8,
};

export const CardVerticalCard = (theme: Theme, darkTheme: boolean) => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: 'clamp(240px, 25vw, 292px)',
  borderRadius: SIZES.borderRadius, // 6px
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'calc(100vw - 32px)',
    maxWidth: 'calc(100vw - 32px)',
  },
});

export const DivVerticalArticleRoot = (theme: Theme) => ({
  padding: theme.spacing(
    SIZES.spacingNumeric.sm, // top: 16px
    SIZES.spacingNumeric.sm, // right: 16px
    SIZES.spacingNumeric.sm, // bottom: 16px
    SIZES.spacingNumeric.sm  // left: 16px
  ),
});

export const GridPadding = (theme: Theme) => ({
  padding: theme.spacing(SIZES.spacingNumeric.md), // 32px
});

export const TypographyVerticalCardNameStyle = (theme: Theme) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(SIZES.spacingNumeric.md), // 32px
  fontSize: FONT_SIZES.avatarName,                 // 1rem = 16px
  fontWeight: FONT_WEIGHTS.regular,                // 400
  lineHeight: LINE_HEIGHTS.normal,                 // 1.5rem = 24px
});

export const TypographyVerticalCardNameStyleHover = (theme: Theme, darkTheme: boolean) => ({
  color: darkTheme ? COLORS.dark.primary : COLORS.light.secondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(SIZES.spacingNumeric.sm), // 16px
  fontWeight: FONT_WEIGHTS.bold,
  fontSize: FONT_SIZES.body1,                      // 1rem = 16px
  lineHeight: LINE_HEIGHTS.normal,                 // 1.5rem = 24px
  textShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,                     // 0.875rem = 14px
    padding: theme.spacing(SIZES.spacingNumeric.sm),
  },
});
