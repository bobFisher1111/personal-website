export const GridHoverBlack = {
  '&:hover': {
    color: 'black',
  },
};

export const GridSectionList = {
  background: '#667A6E',
  borderBottom: '3px solid #667A6E',
  padding: '0px 37px 0px 37px',
  '&.MuiGrid-root': {
    marginTop: '0px'
  },
};

export const TypographyHoverBlack = {
  color: 'black',
  '&:hover': {
    color: 'white',
  },
};

export default [
  GridHoverBlack,  
  GridSectionList,
  TypographyHoverBlack,
];