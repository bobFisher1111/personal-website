import { Theme } from '@mui/material/styles';

export const AppBarStyle = (theme: Theme) => ({
  display: "flex",
  margin: "auto",
  width: "100%",
  maxWidth: "1200px",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    margin: 0,
  },
  [theme.breakpoints.up("md")]: {
    "@media (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)": {
      width: "100vw",
    },
  },
  "@media only screen and (max-device-width: 812px) and (orientation: landscape)": {
    width: "100vw",
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
  padding: '4px 16px 4px 0px',
};

export const TypographyDesktopTitle = (theme: Theme) => ({
  fontSize: '26px',
  padding: '0px 0px 0px 16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
    cursor: 'pointer',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '22px',
  },
});

export const TypographyMobileTitle = {
  fontSize: '22px',
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
