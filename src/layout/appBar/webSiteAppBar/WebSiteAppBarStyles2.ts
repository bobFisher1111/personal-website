export const AppBarStyle = {
  display: 'flex',
  width: '1200px',
  margin: 'auto',
  '@media (max-width: 600px)': {
    width: 'calc(100vw)',
    margin: 0,
  },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    width: 'calc(100vw)',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    width: 'calc(100vw)',
  }
};

export const GridDesktopAppBar = {
  '@media (max-width: 600px)': {
    display: 'none',
  },
};

export const GridDesktopAppBar2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '@media (max-width: 600px)': {
    display: 'none',
  },
};

export const GridMobileAppBar = {
  '@media (min-width: 601px)': {
    display: 'none',
  },
};

export const GridMobileAppBarTitle = {
  display: 'flex',
  justifyContent: 'flex-end',
  '@media (min-width: 601px)': {
    display: 'none',
  },
};

export const LinkGridMobileStyles = {
  padding: '4px 16px 4px 0px',
};

export const TypographyDesktopTitle = {
  fontSize: '26px',
  padding: '0px 0px 0px 16px',
  '@media (max-width: 600px)': {
    fontSize: '22px',
    cursor: 'pointer',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '22px'
  }
};

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
