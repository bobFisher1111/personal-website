import { Theme } from '@mui/material/styles';

export const AppBarStyles = {
  position: 'fixed',
  component: 'nav',
  boxShadow: 'none',
};

export const BoxMobileDrawerStyle = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
  },
});

export const CloseDrawerIconStyle = {};

export const CloseDrawerGridStyles = {
  justifyContent: 'flex-end',
};

export const MenuIconStyle = {};

export const GridMobileDrawerAppBar = (theme: Theme) => ({
  height: '60px',
  borderBottom: '1px solid #0C0D0D',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    padding: '8px',
  },
});

export const GridCenterItems = {
  display: 'flex',
  '& .MuiGrid-root': {
    justifyContent: 'center',
  },
};

export const GridSectionsStyle = {
  margin: '32px 0px 0px 0px',
};

export const TypographyMobileDrawer = (theme: Theme) => ({
  padding: '0px 20px',
  cursor: 'pointer',
  fontSize: '24px',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
});

export const TypograohyMobileDrawerWebistieName = (theme: Theme) => ({
  cursor: 'pointer',
  fontSize: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
});


export default [
  AppBarStyles,
  CloseDrawerIconStyle,
  CloseDrawerGridStyles,
  BoxMobileDrawerStyle,
  GridCenterItems,
  GridSectionsStyle,
  GridMobileDrawerAppBar,
  MenuIconStyle,
  TypographyMobileDrawer,
  TypograohyMobileDrawerWebistieName,
];
