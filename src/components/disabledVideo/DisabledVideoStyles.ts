import { Theme } from '@mui/material/styles';
import { COLORS } from 'src/store/redux/theme/CONSTANTS';

export const RootStyles = (
  darkTheme: boolean,
  articlePage: boolean,
  carousel: boolean
) => (theme: Theme) => ({
  borderRadius: '6px',
  backgroundColor: darkTheme ? COLORS.dark.secondary : COLORS.light.primary,
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: '100%',
  height: articlePage ? '450px' : 'auto',

  [theme.breakpoints.down('sm')]: {
    height: carousel ? '189px' : 'auto',
  },
});

export const YouTubeDisabledStyle = (theme: Theme) => ({
  height: '20px',
  [theme.breakpoints.down('sm')]: {
    height: '15px',
  },
});
