export const AppBarStyle = {
  display: 'flex',
  width: '1200px',
  margin: 'auto',
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
  fontSize: '26px',
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
