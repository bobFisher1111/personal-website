import { SIZES } from 'src/store/redux/theme/CONSTANTS';

export const ArticleTitleTypographyStyles = {
  width: '100%',
  flexBasis: '100%',
  display: 'block',
  mb: 1,
  fontSize: SIZES.fontSize.articleTitle,
  fontWeight: 'bold',
  whiteSpace: 'normal',
  overflowWrap: 'anywhere',
};

export const ArticleSubtitleTypographyStyles = {
  width: '100%',
  flexBasis: '100%',
  display: 'block',
  mb: 2,
  fontSize: SIZES.fontSize.articleSubtitle,
  fontWeight: 400,
  whiteSpace: 'normal',
  overflowWrap: 'anywhere',
};
