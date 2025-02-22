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
  fontSize: '26px',
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '22px'
  }
};

export default [
  AlignLinkTexts,
  GridPointer,
  TypographyLinkTwoPage,
];
