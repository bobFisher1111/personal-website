import { Theme } from '@mui/material';
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
} from 'src/store/redux/theme/CONSTANTS';

export const ArticleDataGridStyles = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
  [theme.breakpoints.up('sm')]: {
    height: SIZES.height.articleTallExact,
  },
});

export const ArticleImageStyles = ( theme: Theme, darkTheme: boolean) => ({
  borderRadius: SIZES.borderRadius,
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  width: '100%',
  height: 'auto',
  aspectRatio: '16/9',
  objectFit: 'cover',
  [theme.breakpoints.up('sm')]: {
    width: SIZES.imageAspectRatio16by9.width,
  },
});

export const AvatarAuthorLinkStyles = (
  theme: Theme,
  darkTheme: boolean
) => ({
  textDecoration: 'none',
  display: 'flex',
  color: darkTheme ? COLORS.dark.primary : theme.palette.text.secondary,
});

export const AvatarImageStyles = (darkTheme: boolean) => ({
  width: SIZES.avatar.sm,
  height: SIZES.avatar.sm,
  borderRadius: '50%',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
});

export const AuthorNameStyles = (theme: Theme) => ({
  paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
  alignContent: 'center',
  fontSize: FONT_SIZES.avatarName,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: LINE_HEIGHTS.normal,
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,
  },
});

export const ChipStyles = (theme: Theme) => ({
  borderRadius: SIZES.chip.borderRadius,
  [theme.breakpoints.down('sm')]: {
    fontSize: SIZES.chip.fontSizeSm,
    height: SIZES.chip.heightSm,
  },
});

export const DateStyles = (theme: Theme) => ({
  justifyContent: 'flex-end',
  display: 'flex',
  fontSize: FONT_SIZES.date,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: LINE_HEIGHTS.normal,
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.base,
  },
});

export const GridNameDateStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `${SIZES.spacing.xxs} 0px`,
  },
});

export const GridWidthStyle = {
  width: SIZES.width.full,
};

export const LinkGridRootStyles = (
  theme: Theme,
  // articlePage: boolean
) => ({
  // maxHeight: SIZES.height.articleTall,
  width: SIZES.width.full,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    maxHeight: SIZES.chip.containerHeightMobile,
    minHeight: SIZES.chip.containerHeightMobile,
  },
});

export const RootStyles = (
  theme: Theme,
) => ({
  margin: 'auto',
  paddingLeft: theme.spacing(SIZES.spacingNumeric.sm),
  paddingRight: theme.spacing(SIZES.spacingNumeric.sm),
  flexGrow: 1,
  height: SIZES.height.rootTall,
  borderBottom: '1px solid rgba(138, 147, 153, 0.25)',
  [theme.breakpoints.down('sm')]: {
    height: SIZES.height.rootSm,
  },
});

export const SeriesChipStyles = {
  paddingLeft: SIZES.spacing.sm,
  textDecoration: 'none',
};

export const SubTitleStyles = (theme: Theme) => ({
  fontSize: FONT_SIZES.subtitle,
  fontWeight: FONT_WEIGHTS.regular,
  lineHeight: LINE_HEIGHTS.normal,
  maxHeight: SIZES.spacing.titlePad,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const TitleStyles = (theme: Theme) => ({
  fontSize: FONT_SIZES.title,
  fontWeight: FONT_WEIGHTS.bold,
  lineHeight: LINE_HEIGHTS.normal,
  maxHeight: '3rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: FONT_SIZES.subtitle,
  },
});
