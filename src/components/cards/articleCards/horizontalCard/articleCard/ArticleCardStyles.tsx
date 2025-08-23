import { Theme } from "@mui/material";
import {
  LIGHT_PRIMARY,
  DARK_PRIMARY,
} from '../../../../../store/redux/theme/CONSTANTS';

export const ArticleDataGridStyles = (theme: Theme) => ({
  width: '860px',
  maxWidth: '100%',
  paddingLeft: '16px',
  [theme.breakpoints.down('sm')]: {
    '&.MuiGrid-root': {
      paddingLeft: '8px',
    },
    width: '60vw',
  },
  '@media (min-width:1024px) and (max-height:1366px) and (orientation:portrait)': {
    width: '700px',
  },
  '@media (max-width:812px) and (orientation:landscape)': {
    width: '500px',
  },
});

export const ArticleImageStyles = (theme: Theme, colorTheme: boolean) => ({
  width: '300px',
  borderRadius: '6px',
  border: colorTheme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
});

export const AvatarAuthorLinkStyles = (colorTheme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  color: colorTheme ? '#9DB2BF' : 'rgba(0, 0, 0, 0.6)',
});

export const AvatarImageStyles = (theme: Theme, colorTheme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: colorTheme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
});

export const ArticleVideoStyles = (theme: Theme, colorTheme: boolean, turOnAuthorForArticle: boolean) => ({
  borderRadius: '6px',
  width: '300px',
  height: turOnAuthorForArticle ? '100px' : '136px',
  border: colorTheme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
  [theme.breakpoints.down('sm')]: {
    height: '60px',
  },
});

export const AuthorNameStyles = (theme: Theme) => ({
  padding: '0px 0px 0px 8px',
  alignContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export const ChipStyles = (theme: Theme) => ({
  borderRadius: '4px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
});

export const DateStyles = (theme: Theme) => ({
  justifyContent: 'flex-end',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export const GridNameDateStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '4px 0px 4px 0px',
  },
});

export const LinkGridRootStyles = (theme: Theme, articlePage: boolean) => ({
  maxHeight: articlePage ? '40px' : '85px',
  minHeight: articlePage ? '40px' : '85px',
  width: '860px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    maxHeight: '28px',
    minHeight: '28px',
  },
  '@media (min-width:1024px) and (max-height:1366px) and (orientation:portrait)': {
    width: '730px',
  },
  '@media (max-width:812px) and (orientation:landscape)': {
    width: '580px',
  },
});

export const LinkGridStyles = {
  display: 'flex',
};

export const RootStyles = (theme: Theme, colorTheme: boolean, turOnAuthorForArticle: boolean) => ({
  margin: 'auto',
  marginBottom: '16px',
  flexGrow: 1,
  height: turOnAuthorForArticle ? '145px' : '235px',
  borderBottom: colorTheme
    ? '1px solid rgba(138, 147, 153, 0.25)'
    : '1px solid rgba(138, 147, 153, 0.25)',
  [theme.breakpoints.down('sm')]: {
    height: '140px',
  },
});

export const SeriesChipStyles = {
  padding: '0px 0px 0px 8px',
  textDecoration: 'none',
};

export const SubTitleStyles = (theme: Theme) => ({
  maxHeight: '50px',
  minHeight: '50px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const TitleStyles = (theme: Theme) => ({
  fontWeight: 'bold',
  maxHeight: '30px',
  minHeight: '30px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    WebkitLineClamp: '2',
    fontSize: '14px',
    maxHeight: '50px',
    minHeight: '50px',
  },
});
