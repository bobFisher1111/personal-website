import { Theme } from '@mui/material/styles';

export const seriesComponentGridRoot = () => ({
  display: 'flex',
  maxWidth: '1024px',
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
  fontSize: '20px',
  padding: '0px 16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
});


export const seriesComponentSubTitle = (theme: Theme) => ({
  fontSize: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  padding: '0px 16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export const seriesComponentDate = (theme: Theme) => ({
  fontSize: '14px',
  padding: '0px 16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export default [
  seriesComponentGridRoot,
  seriesComponentGridHeader,
  seriesComponentGridArticleInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentDate,
];
