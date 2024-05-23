export const AppBarStyle = {
  display: 'flex',
  maxWidth: '100%',
  maxHeight: '100%',
  width: '1080px',
  '@media only screen and (max-width: 600px)': {
  },
  '@media only screen and (min-width: 992px)': {
    margin: 'auto',
  }, 
};

export const GridDesktopAppBar = {
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
  '@media (min-width: 900px)': {
    display: 'none',
  },
};

export const LinkGridMobileStyles = {
  paddingRight: '16px',
};

export const TypographyDesktopTitle = {
  fontSize: '20px',
};

export const TypographyMobileTitle = {
  fontSize: '20px',
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
