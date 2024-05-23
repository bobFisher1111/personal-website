export const AccountCircleStyle = {
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const AvatarImageStyles = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '1px solid black',
  margin: '0px 8px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
};

export const ChipStyle = {
  cursor: 'pointer',
  borderRadius: '4px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
};

export const GridArticleInfoComponent = {
  padding: '4px 0px 0px 0px',
};

export const HorizAriclePageInfoCompAuthor = {
  fontSize: '16px',
  paddingRight: '16px',
  '@media only screen and (max-width: 600px)': {
    paddingTop: '2px',
    fontSize: '12px',
    lineHeight: "1.75",
  },
};

export const HorizArticlePageInfoCompDate = {
  fontSize: '16px',
  paddingRight: '16px',
  '@media only screen and (max-width: 600px)': {
    paddingTop: '2px',
    fontSize: '12px',
  },
};

export const TypographyArticleInfoRight = {
  fontSize: '16px',
  paddingRight: '16px',
};

export const TypographyArticleInfoLeft = {
  fontSize: '16px',
  paddingLeft: '16px'
};

export default [
  AccountCircleStyle,
  AvatarImageStyles,
  ChipStyle,
  GridArticleInfoComponent,
  HorizAriclePageInfoCompAuthor,
  HorizArticlePageInfoCompDate,
  TypographyArticleInfoRight,
  TypographyArticleInfoLeft,
];
