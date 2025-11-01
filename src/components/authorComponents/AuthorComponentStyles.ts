import { Theme } from '@mui/material/styles';

export const authorComponentGridRoot = (turOnArticlePage: boolean) => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: turOnArticlePage ? '550px' : '1200px',
  margin: 'auto',
  padding: '76px 16px 100px 16px',
  borderLeft: turOnArticlePage ? '1px solid #667A6E' : '',
});

export const authorComponentGridBiography = () => ({
  padding: '8px 16px 16px 16px',
});

export const authorComponentGridBiographyTitle = (theme: Theme) => ({
  textAlign: 'flex-start',
  padding: '16px 0px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
});

export const authorComponentGridBiographyText = (theme: Theme) => ({
  textAlign: 'flex-start',
  fontSize: '16px',
  textIndent: '15px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});

export const headerComponentStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '16px 0px 0px 0px',
  },
});
