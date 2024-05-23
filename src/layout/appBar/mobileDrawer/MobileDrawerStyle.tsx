export const AppBarStyles = {
  position: 'fixed',
  component: 'nav',
  boxShadow: 'none',
};

export const BoxMobileDrawerStyle = {
  width:  '100vw',
  height: '100vh',
};

export const CloseDrawerIconStyle = {
};

export const CloseDrawerGridStyles = {
  justifyContent: 'flex-end',
};

export const MenuIconStyle = {
};

export const GridMobileDrawerAppBar = {
  maxHeight: '36px',
  borderBottom: '1px solid #0C0D0D',
};

export const GridCenterItems = {
  display: 'flex',
  '& .MuiGrid-root': {
    justifyContent: 'center'
  }
};

export const GridSectionsStyle = {
  padding: '16px 0px 0px 0px',
};

export const TypographyMobileDrawer = {
  padding: '0px 20px 0px 20px',
  variant: 'h6',
  cursor: 'pointer',
  fontSize: '24px',
};

export const TypograohyMobileDrawerWebistieName = {
  variant: 'h6',
  cursor: 'pointer',
  fontSize: '20px',
};

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
