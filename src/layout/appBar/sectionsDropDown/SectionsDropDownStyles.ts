export const GridHoverBlack = {
  '&:hover': {
    color: '#0C0D0D',
  },
};

export const GridSectionList = {
  background: '#667A6E',
  borderBottom: '3px solid #667A6E',
  padding: '0px 37px 0px 37px',
  '&.MuiGrid-root': {
    marginTop: '0px',
  },
};

export const TypographyHoverBlack = {
  color: '#0C0D0D',
  '&:hover': {
    color: 'white',
  },
};

export const DropDownPosition = {
  position: 'relative',
  zIndex: 1,
};

export default [
  GridHoverBlack,  
  GridSectionList,
  DropDownPosition,
  TypographyHoverBlack,
];