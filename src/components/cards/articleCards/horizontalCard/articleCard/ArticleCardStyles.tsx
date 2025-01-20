import {
  LIGHT_PRIMARY,
  DARK_PRIMARY,
} from '../../../../../store/redux/theme/CONSTANTS';

export const ArticleDataGridStyles = {
  width: '860px',
  maxWidth: '100%',
  paddingLeft: '16px',
  '@media only screen and (max-width: 600px)': {
    '&.MuiGrid-root': {
      paddingLeft: '8px',
    },
    width: 'calc(60vw)',
  },
};

export const ArticleImageStyles = (theme: boolean) => ({
  width: '300px',
  borderRadius: '6px',
  border: theme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
});

export const AvatarAuthorLinkStyles = (theme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  color: theme ? '#9DB2BF' : 'rgba(0, 0, 0, 0.6)',
});
//
export const AvatarImageStyles = (theme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: theme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
});

export const ArticleVideoStyles = (theme: boolean, turOnAuthorForArticle: boolean) => ({
  borderRadius: '6px',
  width: '300px',
  height: turOnAuthorForArticle ? '100px' : '136px',
  border: theme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
  '@media only screen and (max-width: 600px)': {
    height: '60px',
  },
});

export const AuthorNameGridStyles = {
  'display': 'flex',
  padding: '8px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
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

export const DateStyles = {
  justifyContent: 'flex-end',
  display: 'flex',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px'
  },
};

export const GridNameDateStyles = {
  '@media only screen and (max-width: 600px)': {
    padding: '4px 0px 4px 0px'
  },
};

export const LinkGridRootStyles = (articlePage: boolean) => ({
  maxHeight: articlePage ? '40px' : '85px',
  minHeight: articlePage ? '40px' : '85px',
  width: '860px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  '@media only screen and (max-width: 600px)': {
    maxWidth: '100%',
    maxHeight: '28px',
    minHeight: '28px',
  },
});

export const LinkGridStyles = {
  display: 'flex',
};

export const RootStyles = (theme: boolean, turonauthorforarticle: boolean) => ({
  margin: 'auto',
  marginBottom: '16px',
  flexGrow: 1,
  height: turonauthorforarticle  ? '145px' : '235px',
  borderBottom: theme ? '1px solid rgba(138, 147, 153, 0.25)' : '1px solid rgba(138, 147, 153, 0.25)',
  '@media only screen and (max-width: 600px)': {
    height: '140px',
  },
});

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
    fontSize: '14px',
    maxHeight: '50px',
    minHeight: '50px',
  },
};
