import { Theme } from '@mui/material/styles';
import {
  COLORS,
  SIZES,
} from 'src/store/redux/theme/CONSTANTS';
// Still need to do this file:
export const articlePageRoot = (theme: Theme) => ({
  padding: '8px 0px 0px 0px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 8px 0px 8px',
  },
});

export const cardGrid = (theme: Theme) => ({
  height: '180px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
    height: '166px',
  },
});

export const cardHorizontalArticleInfo = (articlePageList: boolean) => ({
  height: '180px',
  boxShadow: 'none',
  padding: !articlePageList ? '0px 0px 0px 24px' : '',
  '@media (min-width:900px)': {
    width: '660px',
  },
  '@media (max-width:600px)': {
    padding: '8px',
  },
});

export const cardMediaArticleVideo = (
  theme: Theme,
  articlePage: boolean,
  videoHeight: boolean,
  mobileImageWidth: string,
  darkTheme: boolean,
) => ({
  height: articlePage ? '576px' : videoHeight ? '444px' : '181px',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  borderRadius: articlePage ? '0px' : '4px',
  aspectRatio: '16/9',
  [theme.breakpoints.down('sm')]: {
    minWidth: articlePage ? '100vw' : `calc(100vw - ${mobileImageWidth})`,
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: 'calc(100vw - 48px)',
    minWidth: 'calc(100vw - 48px)',
  },
  '@media (min-width:1024px) and (max-width:1199px)': {
    minWidth: articlePage ? '800px' : '300px',
    maxWidth: articlePage ? '800px' : '300px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: articlePage ? '960px' : '321px',
    maxWidth: articlePage ? '960px' : '321px',
  },
});

export const gridHorizontalArticleContainer = (
  theme: Theme,
  articlePage: boolean,
  darkTheme: boolean,
) => ({
  width: '100%',
  display: 'flex',
  margin: '0px 0px 16px 0px',
  border: darkTheme || articlePage ? '' : '1px solid #0C0D0D',
  [theme.breakpoints.down('sm')]: {
    border: darkTheme || articlePage ? '' : '1px solid #0C0D0D',
    padding: '6px 0px 0px 0px',
  },
});

export const gridHorizontalArticleMaxWidth = (
  theme: Theme,
  imageWidth: string,
  darkTheme: boolean,
  articlePage: boolean
) => ({
  maxWidth: imageWidth,
  height: darkTheme || articlePage ? undefined : '180px',
  '@media (min-width:1024px) and (max-width:1199px)': {
    maxWidth: articlePage ? '800px' : '300px',
  },
  [theme.breakpoints.down('md')]: {
    height: undefined,
  },
});

export const imageHorizontalArticleStyles = (
  theme: Theme,
  articlePage: boolean,
  imageWidth: string,
  darkTheme: boolean,
) => ({
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  borderRadius: SIZES.borderRadius,
  height: articlePage ? 'auto' : '181px',
  objectFit: 'cover',
  aspectRatio: '16/9',
  width: articlePage ? '960px' : '321px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    marginTop: 0,
    paddingTop: 0,
  },
  [theme.breakpoints.up('sm')]: {
    width: `calc(100vw - ${imageWidth || '48px'})`,
  },
  '@media (min-width:1024px) and (max-width:1199px)': {
    width: articlePage ? '800px' : '300px',
  },
  [theme.breakpoints.up('lg')]: {
    width: articlePage ? '960px' : '321px',
  },
});
