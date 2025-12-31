import { Theme } from '@mui/material/styles';
import {
  COLORS,
  SIZES,
} from 'src/store/redux/theme/CONSTANTS';

export const articlePageRoot = (theme: Theme) => ({
  padding: SIZES.padding.articlePageRoot,
  [theme.breakpoints.down('sm')]: {
    padding: `${SIZES.spacing.xs} ${SIZES.spacing.xs} 0px ${SIZES.spacing.xs}`,
  },
});

export const cardGrid = (theme: Theme) => ({
  height: SIZES.height.horizontalCard,
  [theme.breakpoints.down('sm')]: {
    padding: SIZES.spacing.xs,
    height: SIZES.height.horizontalCardSm,
  },
});

export const cardHorizontalArticleInfo = (articlePageList: boolean) => ({
  height: SIZES.height.horizontalCard,
  boxShadow: 'none',
  padding: !articlePageList ? `0px 0px 0px ${SIZES.padding.cardLarge}` : '',
  '@media (min-width:900px)': {
    width: SIZES.width.horizontalCardContainer,
  },
  '@media (max-width:600px)': {
    padding: SIZES.spacing.xs,
  },
});

export const cardMediaArticleVideo = (
  theme: Theme,
  articlePage: boolean,
  videoHeight: boolean,
  mobileImageWidth: string,
  darkTheme: boolean,
) => ({
  height: articlePage ? SIZES.height.horizontalCardVideoArticle : videoHeight ? SIZES.height.horizontalCardVideoTall : SIZES.height.horizontalCardImage,
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
    minWidth: articlePage ? SIZES.width.horizontalCardMedium : SIZES.width.horizontalCardImageMedium,
    maxWidth: articlePage ? SIZES.width.horizontalCardMedium : SIZES.width.horizontalCardImageMedium,
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: articlePage ? SIZES.maxWidth.appBar : SIZES.width.horizontalCardSmall,
    maxWidth: articlePage ? SIZES.maxWidth.appBar : SIZES.width.horizontalCardSmall,
  },
});

export const gridHorizontalArticleContainer = (
  theme: Theme,
  articlePage: boolean,
  darkTheme: boolean,
) => ({
  width: '100%',
  display: 'flex',
  margin: `0px 0px ${SIZES.spacing.sm} 0px`,
  border: darkTheme || articlePage ? '' : '1px solid #0C0D0D',
  [theme.breakpoints.down('sm')]: {
    border: darkTheme || articlePage ? '' : '1px solid #0C0D0D',
    padding: `${SIZES.padding.cardSmall} 0px 0px 0px`,
  },
});

export const gridHorizontalArticleMaxWidth = (
  theme: Theme,
  imageWidth: string,
  darkTheme: boolean,
  articlePage: boolean
) => ({
  maxWidth: imageWidth,
  height: darkTheme || articlePage ? undefined : SIZES.height.horizontalCard,
  '@media (min-width:1024px) and (max-width:1199px)': {
    maxWidth: articlePage ? SIZES.width.horizontalCardMedium : SIZES.width.horizontalCardImageMedium,
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
  height: articlePage ? 'auto' : SIZES.height.horizontalCardImage,
  objectFit: 'cover',
  aspectRatio: '16/9',
  width: articlePage ? '100%' : SIZES.width.horizontalCardSmall,
  maxWidth: articlePage ? SIZES.width.horizontalCardMedium : undefined,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    marginTop: 0,
    paddingTop: 0,
  },
  [theme.breakpoints.up('sm')]: {
    width: articlePage ? '100%' : `calc(100vw - ${imageWidth || '48px'})`,
  },
  [theme.breakpoints.up('lg')]: {
    width: articlePage ? SIZES.maxWidth.appBar : SIZES.width.horizontalCardSmall,
  },
});
