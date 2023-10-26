export const ChipStyle = {
  color: 'black',
  cursor: 'pointer',
  borderRadius: '4px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
};

export const DivMaterialSymbolsOutlined = () => ({
  fontSize: '20px',
  color: '#2F4C69',
  marginRight: '4px',
  lineHeight: '24px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
});

export const GridArticalInfoComponent = {
  padding: '4px 0px 0px 0px',
};

export const HorizArticalPageInfoCompAuthor = {
  fontSize: '16px',
  paddingRight: '16px',
  '@media only screen and (max-width: 600px)': {
    paddingTop: '2px',
    fontSize: '12px',
  },
};

export const HorizArticalPageInfoCompDate = {
  fontSize: '16px',
  paddingRight: '16px',
  '@media only screen and (max-width: 600px)': {
    paddingTop: '2px',
    fontSize: '12px',
   },
};

export const TypographyArticalInfoRight = {
  fontSize: '16px',
  paddingRight: '16px',
};

export const TypographyArticalInfoLeft = {
  fontSize: '16px',
  paddingLeft: '16px'
};

export default [
  ChipStyle,
  DivMaterialSymbolsOutlined,
  GridArticalInfoComponent,
  HorizArticalPageInfoCompAuthor,
  HorizArticalPageInfoCompDate,
  TypographyArticalInfoRight,
  TypographyArticalInfoLeft,
];
