import { Theme } from '@mui/material/styles';

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
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 8px',
  },
});

export const TypographySeriesArticleSubTitle = (theme: Theme) => ({
  fontSize: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: '0px 0px 0px 8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '0px 8px',
    WebkitLineClamp: 2,
  },
  [theme.breakpoints.down(820)]: {
    padding: 0,
  },
});

export const TypographySeriesArticleTitle = (theme: Theme) => ({
  padding: '0px 0px 0px 8px',
  fontSize: '20px',
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
  fontSize: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
    padding: '16px 0px 8px 0px',
    WebkitBoxOrient: 'unset',
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
];
