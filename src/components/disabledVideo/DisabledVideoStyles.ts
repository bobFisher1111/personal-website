import { Theme } from '@mui/material/styles';

export const RootStyles = (
  darkTheme: boolean,
  articlePage: boolean,
  carousel: boolean
) => (theme: Theme) => ({
  borderRadius: '6px',
  backgroundColor: darkTheme ? '#0C0D0D' : 'white',
  border: '1px solid #0C0D0D',
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
