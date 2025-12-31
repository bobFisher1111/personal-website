import { Theme } from '@mui/material/styles';
import {
  COLORS,
  SIZES,
} from 'src/store/redux/theme/CONSTANTS';

export const avatarImageStyles = (theme: Theme, darkTheme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  marginRight: '8px',
  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
});

export const gridArticleInfoComponent = (theme: Theme) => ({
  maxWidth: SIZES.maxWidth.appBar,
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
