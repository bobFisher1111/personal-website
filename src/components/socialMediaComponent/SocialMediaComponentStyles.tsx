import { Theme } from '@mui/material/styles';

export const socialMediaIconStyle = (theme: Theme) => ({
  height: '20px',
  [theme.breakpoints.down('sm')]: {
    height: '15px',
  },
});

export const socialMediaGridItemStyle = (
  theme: Theme,
  widthPadding?: string,
  turnOnStyle?: boolean
) => ({
  padding: turnOnStyle ? widthPadding : '',
});

export const emailGridStyle = (turnOnEmailStyle?: boolean) => ({
  padding: turnOnEmailStyle ? '0px' : '10px 0px 16px 16px',
  alignContent: 'center',
});
