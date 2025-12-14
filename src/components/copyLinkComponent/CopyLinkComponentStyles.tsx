import { Theme } from '@mui/material';

export const ContentCopyIconStyle = (
  theme: Theme,
  darkTheme: boolean,
  padding: string | number
) => ({
  color: darkTheme ? '#9DB2BF' : '#0C0D0D',
  padding,
  cursor: 'pointer',
  width: '40px',
  '&:hover': {
    color: '#2F4C69',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    padding: '2px 0px 0px 8px',
    height: '20px',
  },
});

export const EmailOutlinedIconStyles = (theme: Theme, darkTheme: boolean) => ({
  height: '30px',
  cursor: 'pointer',
  color: darkTheme ? '#9DB2BF' : '#0C0D0D',
  '&:hover': {
    color: '#2F4C69',
  },
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
});
