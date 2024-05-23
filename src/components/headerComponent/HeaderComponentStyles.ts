export const AvatarStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '4px',
  '@media only screen and (max-width: 600px)': {
    width: '75px',
    height: '75px',
  },
};

export const GridAvatarPadding = {
  padding: '25px 16px 25px 16px',
};

export const GridHeader = {
  '@media (max-width: 1023px)': {
    padding: '0px',
  },
};

export const GridHeaderTitle = {
  padding: '25px 0px 12px 0px',
  '@media only screen and (max-width: 667px) and (orientation: landscape)': { // IPHONE SE Landscape ** 
    // padding: '0px',
    padding: '25px 0px 0px 0px',
  },
};

export const GridPaddingRight = {
  padding: '0px 0px 0px 16px'
};

export const TypographyHeaderTitle = {
  textAlign: 'center',
  fontSize: '32px',
  lineHeight: '40px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media (min-width: 1023px)': {
    padding: '25px 0px 25px 0px',
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '28px',
  },
};

export default [
  AvatarStyle,
  GridAvatarPadding,
  GridHeader,
  GridHeaderTitle,
  GridPaddingRight,
  TypographyHeaderTitle,
];
