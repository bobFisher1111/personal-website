export const AppBarStyles = {
  position: 'fixed',
  component: 'nav',
  boxShadow: 'none',
};

export const BoxMobileDrawerStyle = {
  '@media (max-width: 600px)': {
    width: '600px',
  }
};

export const CloseDrawerIconStyle = {
};

export const CloseDrawerGridStyles = {
  justifyContent: 'flex-end',
};

export const MenuIconStyle = {
};

export const GridMobileDrawerAppBar = {
  height: '60px',
  borderBottom: '1px solid #0C0D0D',
  '@media (max-width: 600px)': {
    width: '600px',
    padding: '8px'
  }
};

export const GridCenterItems = {
  display: 'flex',
  '& .MuiGrid-root': {
    justifyContent: 'center'
  }
};

export const GridSectionsStyle = {
  margin: '32px 0px 0px 0px',
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
