import { Theme } from '@mui/material';

// Currently not being used
export const GridAuthorArticle = (theme: Theme) => ({
  padding: '16px',
  [theme.breakpoints.up('sm')]: {
    padding: '24px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '32px',
  },
});

export const GridPaddingTop = (theme: Theme) => ({
  paddingTop: '16px',
  [theme.breakpoints.up('sm')]: {
    paddingTop: '24px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '32px',
  },
});
