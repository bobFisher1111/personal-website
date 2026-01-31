import { Theme } from '@mui/material';
import { COLORS } from 'src/store/redux/theme/CONSTANTS';

export const ContentCopyIconStyle = (
  theme: Theme,
  darkTheme: boolean,
  padding: string | number
) => ({
  color: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
  padding,
  cursor: 'pointer',
  width: '40px',
  '&:hover': {
    color: darkTheme ? COLORS.dark.text.secondary : COLORS.light.accent.green3,
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
  color: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
  '&:hover': {
    color: darkTheme ? COLORS.dark.text.secondary : COLORS.light.accent.green2,
  },
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
});
