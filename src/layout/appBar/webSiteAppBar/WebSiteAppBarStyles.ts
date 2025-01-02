export const AppBarStyle = {
  display: 'flex',
  width: '1200px',
  margin: 'auto',
  '@media (max-width: 600px)': {
    width: 'calc(100vw)',
    margin: 0,
  }
};

export const GridDesktopAppBar = {
  '@media (max-width: 900px)': {
    display: 'none',
  },
};

export const GridDesktopAppBar2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '@media (max-width: 900px)': {
    display: 'none',
  },
};

export const GridMobileAppBar = {
  '@media (min-width: 900px)': {
    display: 'none',
  },
};

export const GridMobileAppBarTitle = {
  display: 'flex',
  justifyContent: 'flex-end',
  '@media (min-width: 900px)': {
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
