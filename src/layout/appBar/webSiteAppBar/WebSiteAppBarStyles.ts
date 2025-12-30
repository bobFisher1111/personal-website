// src/styles/appBarStyles.ts
import { Theme } from '@mui/material/styles';
import { FONT_SIZES, SIZES } from 'src/store/redux/theme/CONSTANTS';

export const AppBarStyle = (theme: Theme) => ({
  display: 'flex',
  margin: 'auto',
  width: '100%',
  maxWidth: SIZES.maxWidth.appBar,
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    margin: 0,
  },
  [theme.breakpoints.up('md')]: {
    '@media (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      width: '100vw',
    },
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    width: '100vw',
  },
});

export const GridDesktopAppBar = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const GridDesktopAppBar2 = (theme: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const GridMobileAppBar = (theme: Theme) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

export const GridMobileAppBarTitle = (theme: Theme) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

export const LinkGridMobileStyles = {
  padding: SIZES.padding.linkGridMobile,
};

export const TypographyDesktopTitle = (theme: Theme) => ({
  fontSize: FONT_SIZES.sectionTitle,
  padding: SIZES.padding.desktopTitle,
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.body1,
    cursor: 'pointer',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: FONT_SIZES.large,
  },
});

export const TypographyMobileTitle = {
  fontSize: FONT_SIZES.body1,
  cursor: 'pointer',
};

export default [
  AppBarStyle,
  GridDesktopAppBar,
  GridMobileAppBar,
  GridMobileAppBarTitle,
  LinkGridMobileStyles,
  TypographyDesktopTitle,
  TypographyMobileTitle,
];
