import { Theme } from '@mui/material';
import {
  LIGHT_PRIMARY,
  DARK_PRIMARY,
} from '../../../../../store/redux/theme/CONSTANTS';

export const ArticleDataGridStyles = (theme: Theme) => ({
  paddingLeft: theme.spacing(2),
});

export const ArticleImageStyles = (darkTheme: boolean) => ({
  width: 'clamp(240px, 25vw, 300px)',
  borderRadius: '6px',
  border: `1px solid ${darkTheme ? DARK_PRIMARY : LIGHT_PRIMARY}`,
});

export const ArticleVideoStyles = (
  theme: Theme,
  darkTheme: boolean,
  turOnAuthorForArticle: boolean
) => ({
  borderRadius: '6px',
  width: 'clamp(240px, 25vw, 300px)',
  height: turOnAuthorForArticle ? '100px' : '136px',
  border: `1px solid ${darkTheme ? DARK_PRIMARY : LIGHT_PRIMARY}`,
  [theme.breakpoints.down('sm')]: {
    height: turOnAuthorForArticle ? '80px' : '110px',
  },
});

export const AvatarAuthorLinkStyles = (
  theme: Theme,
  darkTheme: boolean
) => ({
  textDecoration: 'none',
  display: 'flex',
  color: darkTheme ? '#9DB2BF' : theme.palette.text.secondary,
});

export const AvatarImageStyles = (
  theme: Theme,
  darkTheme: boolean
) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: `1px solid ${darkTheme ? DARK_PRIMARY : LIGHT_PRIMARY}`,
  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
});

export const AuthorNameStyles = (theme: Theme) => ({
  paddingLeft: theme.spacing(1),
  alignContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export const ChipStyles = (theme: Theme) => ({
  borderRadius: '4px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    height: '24px',
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
    padding: '4px 0px',
  },
});

export const GridWidthStyle = {
  width: '100%',
}

export const LinkGridRootStyles = (
  theme: Theme,
  articlePage: boolean
) => ({
  maxHeight: articlePage ? '40px' : '85px',
  minHeight: articlePage ? '40px' : '85px',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '28px',
    minHeight: '28px',
  },
});

export const RootStyles = (
  theme: Theme,
  darkTheme: boolean,
  turOnAuthorForArticle: boolean
) => ({
  margin: 'auto',
  marginBottom: theme.spacing(2),
  flexGrow: 1,
  height: turOnAuthorForArticle ? '145px' : '235px',
  borderBottom: '1px solid rgba(138, 147, 153, 0.25)',
  [theme.breakpoints.down('sm')]: {
    height: '140px',
  },
});

export const SeriesChipStyles = {
  paddingLeft: '8px',
  textDecoration: 'none',
};

export const SubTitleStyles = (theme: Theme) => ({
  fontSize: 'clamp(14px, 1.8vw, 18px)',
  lineHeight: 1.4,
  maxHeight: '50px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const TitleStyles = () => ({
  fontWeight: 'bold',
  fontSize: 'clamp(16px, 2vw, 20px)',
  lineHeight: 1.3,
  maxHeight: '48px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
});
