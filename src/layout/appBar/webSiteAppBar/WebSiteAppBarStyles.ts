export const AppBarStyle = {
  display: 'flex',
  maxWidth: '100%',
  maxHeight: '100%',
  width: '1200px',
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
  padding: '4px 16px 4px 0px',
};

export const TypographyDesktopTitle = {
  fontSize: '22px',
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
