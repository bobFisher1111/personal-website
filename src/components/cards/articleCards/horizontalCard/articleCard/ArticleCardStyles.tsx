export const ArticleDataGridStyles = {
  '&.MuiGrid-root': {
    paddingTop: '8px',
  },
  '@media only screen and (max-width: 600px)': {
    '&.MuiGrid-root': {
      paddingLeft: '8px',
    },
  },
};

export const ArticleImageStyles = (theme: boolean) => ({
  width: '300px',
  borderRadius: '6px',
  border: theme ? '1px solid #9DB2BF' : '1px solid black',
});

export const AvatarAuthorLinkStyles = (theme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  color: theme ? '#9DB2BF' : 'rgba(0, 0, 0, 0.6)',
});

export const AvatarImageStyles = (theme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: theme ? '1px solid #9DB2BF' : '1px solid black',
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
});

export const ArticleVideoStyles = (theme: boolean, turOnAuthorForArticle: boolean) => ({
  borderRadius: '6px',
  width: '300px',
  height: turOnAuthorForArticle ? '100px' : '136px',
  border: theme ? '1px solid #9DB2BF' : '1px solid black',
  '@media only screen and (max-width: 600px)': {
    height: '60px',
  },
});

export const AuthorNameGridStyles = {
  'display': 'flex',
};

export const AuthorNameStyles = {
  padding: '0px 0px 0px 8px',
  alignContent: 'center',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px'
  },
};

export const ChipStyles = {
  borderRadius: '4px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
};

export const ChipGridStyles = {
  maxHeight: '50px',
  minHeight: '50px',
  '@media only screen and (max-width: 600px)': {
    maxHeight: '25px',
    minHeight: '25px',
  },
};

export const DateStyles = {
  justifyContent: 'flex-end',
  display: 'flex',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px'
  },
};

export const ImageGridStyles = {
  '&.MuiGrid-root': {
    paddingTop: '8px',
  },
};

export const LinkGridRootStyles = {
  maxHeight: '50px',
  minHeight: '50px',
  '@media only screen and (max-width: 600px)': {
    maxHeight: '30px',
    minHeight: '30px',
    paddingTop: '2px',
  },
};

export const LinkGridStyles = {
  display: 'flex',
};

// remove bottom border?
export const RootStyles = (theme: boolean, turonauthorforarticle: boolean) => ({
  margin: 'auto',
  marginBottom: '16px',
  flexGrow: 1,
  height: turonauthorforarticle  ? '145px' : '200px',
  borderBottom: theme ? '1px solid rgba(138, 147, 153, 0.25)' : '1px solid rgba(138, 147, 153, 0.25)',
  '@media only screen and (max-width: 600px)': {
    height: '140px',
  },
});

export const RootTopStyles = {
  padding: '0px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 8px 0px',
  },
};

export const SeriesChipStyles = {
  padding: '0px 0px 0px 8px',
  textDecoration: 'none',
};

export const SubTitleStyles = {
  maxHeight: '50px',
  minHeight: '50px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export const TitleStyles = {
  fontWeight: 'bold',
  maxHeight: '30px',
  minHeight: '30px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  '@media only screen and (max-width: 600px)': {
    WebkitLineClamp: '2',
    fontSize: '16px',
    maxHeight: '50px',
    minHeight: '50px',
  },
};

export default [
  ArticleDataGridStyles,
  ArticleImageStyles,
  ArticleVideoStyles,
  AvatarAuthorLinkStyles,
  AvatarImageStyles,
  AuthorNameGridStyles,
  AuthorNameStyles,
  ChipStyles,
  ChipGridStyles,
  DateStyles,
  ImageGridStyles,
  LinkGridRootStyles,
  LinkGridStyles,
  RootStyles,
  RootTopStyles,
  SeriesChipStyles,
  SubTitleStyles,
  TitleStyles,
];