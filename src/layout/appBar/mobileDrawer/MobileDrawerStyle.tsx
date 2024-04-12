export const BoxMobileDrawerStyle = {
  width:  '100vw',
  height: '100vh',
  backgroundColor: 'white',
};

export const CloseDrawerIconStyle = {
  color: '#0C0D0D',
};

export const MenuIconStyle = {
  color: '#0C0D0D',
};

export const GridMobileDrawerAppBar = {
  backgroundColor: '#667A6E',
  maxHeight: '36px',
  padding: '0px 0px 0px 8px',
  borderBottom: 'solid #2F4C69 1px',
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
  // color: '#2F4C69',
  color: '#0C0D0D',
  cursor: 'pointer',
  '&:hover': {
    color: '#0C0D0D',
  },
  fontSize: '24px',
};

export const TypograohyMobileDrawerWebistieName = {
  variant: 'h6',
  color: '#0C0D0D',
  cursor: 'pointer',
  '&:hover': {
    color: 'white',
  },
  fontSize: '20px',
};

export default [
  CloseDrawerIconStyle,
  BoxMobileDrawerStyle,
  GridCenterItems,
  GridSectionsStyle,
  GridMobileDrawerAppBar,
  MenuIconStyle,
  TypographyMobileDrawer,
  TypograohyMobileDrawerWebistieName,
];
