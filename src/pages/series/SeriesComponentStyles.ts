import { Theme } from '@mui/material/styles';
import { SIZES, FONT_SIZES, FONT_WEIGHTS } from 'src/store/redux/theme/CONSTANTS';

export const seriesComponentGridRoot = () => ({
  display: 'flex',
  maxWidth: SIZES.maxWidth.screenWidth,
  margin: 'auto',
  padding: '76px 16px 100px 16px',
});

export const seriesComponentGridHeader = (theme: Theme) => ({
  alignItems: 'center',
  padding: '16px 0px 0px 0px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px',
  },
});

export const seriesComponentGridArticleInfo = (theme: Theme) => ({
  padding: '16px 0px 16px 0px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 0px 16px 0px',
  },
});

export const seriesComponentTitle = (theme: Theme) => ({
  fontSize: FONT_SIZES.title,
  padding: '0px 16px',
  fontWeight: FONT_WEIGHTS.bold,
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.subtitle,
  },
});

export const seriesComponentSubTitle = (theme: Theme) => ({
  fontSize: FONT_SIZES.subtitle,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  padding: '0px 16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.subtitle,
  },
});

export const seriesComponentDate = (theme: Theme) => ({
  fontSize: FONT_SIZES.body1,
  padding: '0px 16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,
  },
});

export const seriesComponentImageStyle = (theme: Theme) => ({
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

export default [
  seriesComponentGridRoot,
  seriesComponentGridHeader,
  seriesComponentGridArticleInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentDate,
  seriesComponentImageStyle,
];
