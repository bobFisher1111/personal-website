import { Theme } from '@mui/material/styles';
import {
  LIGHT_PRIMARY,
  DARK_PRIMARY,
} from '../../../../../store/redux/theme/CONSTANTS';
// Still need to do this file: 
export const avatarImageStyles = (theme: Theme, darkTheme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: `1px solid ${darkTheme ? DARK_PRIMARY : LIGHT_PRIMARY}`,
  marginRight: '8px',
  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
});

export const gridArticleInfoComponent = (theme: Theme) => ({
  maxWidth: '1200px',
  margin: 'auto',
  padding: '4px 0px 0px 0px',
  [theme.breakpoints.down('sm')]: {
    padding: '6px 8px 0px 8px',
    width: '100%',
  },
});

export const authorTextStyles = (theme: Theme) => ({
  fontSize: '16px',
  paddingRight: '16px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '2px',
    fontSize: '12px',
    lineHeight: 1.75,
  },
});

export const dateTextStyles = (theme: Theme) => ({
  fontSize: '16px',
  paddingRight: '16px',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '2px',
    fontSize: '12px',
  },
});

export const separatorStyles = {
  fontSize: '16px',
  paddingRight: '16px',
};
