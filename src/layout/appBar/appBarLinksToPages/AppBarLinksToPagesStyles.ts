export const AlignLinkTexts = (paddingleft: boolean) => ({
  display: 'flex',
  alignContent: 'center',
  WebkitJustifyContent: 'center',
  WebkitAlignItems: 'center',
  padding: paddingleft ? '16px 16px 0px 16px' : '16px 0px 0px 0px',
  '&.MuiGrid-item': {
    paddingLeft: '0px',
  }
});

export const GridPointer = {
  display: 'flex',
  cursor: 'pointer',
  padding: '16px 0px 0px 0px',
};

export const TypographyLinkTwoPage = {
  cursor: 'pointer',
};

export default [
  AlignLinkTexts,
  GridPointer,
  TypographyLinkTwoPage,
];
