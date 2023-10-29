export const AppBarStyle = {
  display: 'flex',
  maxWidth: '1024px',
  minWidth: '1024px',
  '@media only screen and (max-width: 600px)': {
    maxWidth: '95vw',
    minWidth: '95vw',
  },
  '@media only screen and (min-width: 992px)': {
    margin: 'auto',
  },
};

export const GridDesktopAppBar = {
  padding: '0px 16px 0px 16px',
  '@media (max-width: 1023px)': {
    display: 'none',
  },
};

export const GridMobileAppBar = {
  '@media (min-width: 1023px)': {
    display: 'none',
  },
};

export const GridMobileAppBarTitle = {
  '@media (min-width: 1023px)': {
    display: 'none',
  },
  '@media only screen and (min-width: 768px)': {
    paddingRight: '100px',
  },
  '@media only screen and (min-width: 820px)': {
    paddingRight: '50px',
  },
};

export const TypographyDesktopTitle = {
  fontSize: '20px',
  color: 'black',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
  },
};

export const TypographyMobileTitle = {
  fontSize: '16px',
  color: 'black',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
  },
};

export default [
  AppBarStyle,
  GridDesktopAppBar,
  GridMobileAppBar,
  GridMobileAppBarTitle,
  TypographyDesktopTitle,
  TypographyMobileTitle,
];
