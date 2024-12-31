export const AvatarImageStyles = (theme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: theme ? '1px solid #9DB2BF' :'1px solid black',
  margin: '0px 8px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
});

export const GridArticleInfoComponent = {
  maxWidth: '1200px',
  margin: 'auto',
  padding: '4px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '6px 8px 0px 8px',
    width: '600px',
  },
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
