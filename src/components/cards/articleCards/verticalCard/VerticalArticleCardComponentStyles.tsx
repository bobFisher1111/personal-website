import { Theme } from '@mui/material';
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  // LINE_HEIGHTS,
  // SIZES,
} from "src/store/redux/theme/CONSTANTS";
// 
export const CardMediaVerticalCardImage = (theme: Theme, darkTheme: boolean) => ({
  width: '100%',
  // width : '345px',
  height: 'auto',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,

  [theme.breakpoints.up('sm')]: {
    height: '400px',
  },

  [theme.breakpoints.down(740)]: {
    '&.MuiCardMedia-root': {
      maxHeight: '224px',
    },
  },
});

export const CardMediaVerticalCardVideo = {
  border: '0px',
  borderRadius: '4px',
};

export const CardRootStyle = {
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
};

export const CardFooterStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#0C0D0D',
  opacity: 0.7,
};

export const CardVerticalCard = (theme: Theme, darkTheme: boolean) => ({
  border: darkTheme ? '1px solid #9DB2BF' : '#0C0D0D',
  width: '365px',

  [theme.breakpoints.down(992)]: {
    width: '321px',
  },

  [theme.breakpoints.up(992)]: {
    width: '345px',
  },

  [theme.breakpoints.down(740)]: {
    minWidth: 'calc(100vw - 48px)',
    maxWidth: 'calc(100vw - 48px)',
  },
});

export const DivVerticalArticleRoot = (theme: Theme) => ({
  paddingBottom: theme.spacing(2),
});

export const GridVeriticalCardVideo = (theme: Theme) => ({
  maxWidth: '345px',
  minWidth: '345px',
  height: '400px',

  [theme.breakpoints.down(740)]: {
    minWidth: 'calc(100vw - 32px)',
    maxWidth: 'calc(100vw - 32px)',
    height: '200px',
  },

  [theme.breakpoints.up('sm')]: {
    minWidth: '321px',
    maxWidth: '365px',
  },
});

export const GridPadding = (theme: Theme) => ({
  padding: theme.spacing(2),
});

export const TypographyVerticalCardNameStyle = (theme: Theme) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(2),
});

export const TypographyVerticalCardNameStyleHover = (theme: Theme) => ({
  fontSize: FONT_SIZES.body1,  
  fontWeight: FONT_WEIGHTS.bold,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(2),

  [theme.breakpoints.down(740)]: {
    fontSize: '12px',
  },

  '&:hover': {
    textDecoration: 'underline',
  },
});
