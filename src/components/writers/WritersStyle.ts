import { Theme } from '@mui/material/styles';

export const WritersGridRoot = () => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: '1024px',
  margin: 'auto',
  padding: '40px 24px 0px 24px',
});

export const WritersCardGrid = (theme: Theme) => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: '1024px',
  margin: 'auto',
  padding: '16px 24px 0px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 24px 0px 24px',
  },
});
