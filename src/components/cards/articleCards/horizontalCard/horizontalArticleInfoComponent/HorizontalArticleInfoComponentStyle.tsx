export const ChipNoPointer = {
  borderRadius: '4px',
  color: 'black',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
};

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

export const DivSeriesLeftPadding = () => ({
  padding: '0px 0px 0px 16px',
});

export const GridHorizontalInfo = {
  '@media only screen and (max-width: 600px)': {
    padding: '0px 4px 2px 4px',
  },
};

export const TypographyHorizontalInfoText = {
  color: '#2F4C69',
  fontSize: '16px',
  paddingRight: '16px',
  lineHeight: '24px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
  '@media only screen and (min-width: 600px)': {
    width: '100%',
  },
  '@media only screen and (min-width: 992px)': {
    width: 'auto',
  },
};

export default [
  ChipNoPointer,
  ChipStyle,
  DivMaterialSymbolsOutlined,
  DivSeriesLeftPadding,
  GridHorizontalInfo,
  TypographyHorizontalInfoText,
];
