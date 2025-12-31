import { Theme } from '@mui/material/styles';
import { FONT_SIZES, FONT_WEIGHTS } from 'src/store/redux/theme/CONSTANTS';

export const GridMarginLeft = (theme: Theme) => ({
  margin: '0px 0px 0px 16px',
  [theme.breakpoints.down('sm')]: {
    margin: 0,
  },
});

export const GridSeriesReadMoreMargin = (theme: Theme) => ({
  margin: '16px 0px 0px 16px',
  justifyContent: 'left',
  padding: '0px 0px 0px 30px',
  [theme.breakpoints.down('sm')]: {
    margin: '0px 0px 16px 0px',
    justifyContent: 'center',
    padding: 0,
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px 0px 0px 90px',
  },
});

export const GridSeriesArticleList = (theme: Theme) => ({
  marginBottom: '16px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px 0px 0px 16px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: 0,
  },
});

export const GridSeriesRoot = () => ({
  padding: '10px 0px 0px 0px',
});

export const TypographySeriesArticleDate = (theme: Theme) => ({
  padding: '0px 0px 0px 8px',
  fontSize: FONT_SIZES.date,
  [theme.breakpoints.down('sm')]: {
    padding: '0px 8px',
  },
});

export const TypographySeriesArticleSubTitle = (theme: Theme) => ({
  fontSize: FONT_SIZES.subtitle,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: '0px 0px 0px 8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.subtitle,
    padding: '0px 8px',
    WebkitLineClamp: 2,
  },
  [theme.breakpoints.down(820)]: {
    padding: 0,
  },
});

export const TypographySeriesArticleTitle = (theme: Theme) => ({
  padding: '0px 0px 0px 8px',
  fontSize: FONT_SIZES.title,
  fontWeight: FONT_WEIGHTS.bold,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 8px',
  },
});

export const TypographySeriesTitle = (theme: Theme) => ({
  padding: '16px 0px 16px 0px',
  fontSize: FONT_SIZES.sectionTitle,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.sectionTitle,
    padding: '16px 0px 8px 0px',
    WebkitBoxOrient: 'unset',
  },
});

export const GridSeriesContentContainer = (theme: Theme) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' } as any,
  gap: '16px',
  alignItems: 'flex-start',
});

export const GridSeriesCardWrapper = () => ({
  flexShrink: 0,
});

export const GridSeriesTextContent = (theme: Theme) => ({
  flex: 1,
  minWidth: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
});

export default [
  GridMarginLeft,
  GridSeriesReadMoreMargin,
  GridSeriesArticleList,
  GridSeriesRoot,
  TypographySeriesArticleDate,
  TypographySeriesArticleSubTitle,
  TypographySeriesArticleTitle,
  TypographySeriesTitle,
  GridSeriesContentContainer,
  GridSeriesCardWrapper,
  GridSeriesTextContent,
];
