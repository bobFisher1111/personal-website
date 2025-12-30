import { Theme } from '@mui/material/styles';
import {
  COLORS,
} from 'src/store/redux/theme/CONSTANTS';

export const avatarAuthorLinkStyles = (darkTheme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  color: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
});

export const avatarImageStyles = (theme: Theme, darkTheme: boolean) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
  '@media (max-device-width:812px) and (orientation: landscape)': {
    width: '16px',
    height: '16px',
  },
});

export const authorNameStyles = (theme: Theme) => ({
  padding: '0px 0px 0px 8px',
  alignContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  '@media (max-device-width:812px) and (orientation: landscape)': {
    fontSize: '12px',
  },
});
