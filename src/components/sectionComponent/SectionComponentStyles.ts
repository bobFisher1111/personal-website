export const GridMaxWidth = {
  maxWidth: '1600px',
};

export const GridSections = (homepage: boolean) => ({
  padding: '16px',
  '&.MuiGrid-root': {
    '&.MuiGrid-item': {
      paddingTop: homepage ? '16px' : '32px',
    }
  },
  '@media only screen and (max-width: 768px)': {
    padding: '4px',
    '&.MuiGrid-root': {
      '&.MuiGrid-item': {
        paddingTop: '0px',
      }
    },
  },
});

export default [
  GridMaxWidth,
  GridSections,
];
