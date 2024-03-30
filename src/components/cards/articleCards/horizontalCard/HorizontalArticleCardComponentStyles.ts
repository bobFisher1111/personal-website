export const CardHorizontalArticleInfo = ( articlepagelist: boolean ) => ({
  maxWidth: '740px',
  backgroundColor: 'white',
  boxShadow: 'none',
  padding: !articlepagelist ? '4px 0px 0px 24px' : '',
  '@media only screen and (min-width: 768px)': {
    maxWidth: '45%',
  },
  '@media only screen and (min-width: 992px)': {
    minWidth: articlepagelist ? '321px' : '647px',
    maxWidth: articlepagelist ? '321px' : '0px',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
});

export const CardMedaiArticleVideo = (articlepage: boolean, videoHeight: boolean, mobileImageWidth?: string) => ({
  height: articlepage ? '576px' : '181px',
  border: '0px',
  borderRadius: '7px',
  '@media only screen and (max-width: 600px)': {
    maxWidth: `calc(100vw - ${mobileImageWidth})`,
    minWidth: `calc(100vw - ${mobileImageWidth})`,
    height: '200px',
  },
  '@media only screen and (min-width: 600px)': {
    maxWidth: 'calc(100vw - 48px)',
    minWidth: 'calc(100vw - 48px)',
  },
  '@media only screen and (min-width: 768px)': {
    minWidth: articlepage ? `calc(100vw - ${mobileImageWidth})` : '321px',
    maxWidth: articlepage ? `calc(100vw - ${mobileImageWidth})` : '321px',
    height: articlepage ? '450px': videoHeight ? '444px' : '200px',
  },
  '@media only screen and (min-width: 992px)': {
    minWidth: articlepage ? '960px' : '321px',
    maxWidth: articlepage ? '960px' : '321px',
  },
  '@media only screen and (min-width: 1200px)': {
    minWidth: articlepage ? '960px' : '321px',
    maxWidth: articlepage ? '960px' : '321px',
  },
});

export const GridHorizontalArticleContainer = {
  width: '100%',
  background: '#fff',
  display: 'flex',
  margin: '0px 0px 16px 0px',
};

export const GridHorizontalArticleMaxWidth = (imagewidth: string) => ({
  maxWidth: imagewidth,
});

export const ImageHorizonatalArticleStyles = (articlepage: any, imagewidth?: any) => ({
  height: `${articlepage} ? '576px' : '181px'`,
  borderRadius: '7px',
  aspectRatio: '16/9',
  width: articlepage ? '960px' : '321px',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${imagewidth})`
  },
  '@media only screen and (min-width: 600px)': {
    width: `calc(100vw - ${imagewidth})`,
  },
  '@media only screen and (min-width: 768px)': {
    width: articlepage ? `calc(100vw - ${imagewidth})` : '321px',
  },
  '@media only screen and (min-width: 992px)': {
    width: articlepage ? '960px' : '321px',
  },
  '@media only screen and (min-width: 1200px)': {
    width: articlepage ? '960px' : '321px',
  },
});

export const TypographyHorizontalArticleDate = {
  fontSize: '14px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    padding: '0px 4px 0px 4px',
  },
};

export const TypographyHorizontalArticleSubTitle = (articlepage: boolean, cardtextwidth: string) => ({
  color: '#667A6E',
  fontSize: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  maxWidth: articlepage ? '321px' : `${cardtextwidth} !important`,
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    padding: '0px 4px 0px 4px',
  },
});

export const TypographyHorizontalArticleTitle = (articlepage: boolean) => ({
  color: '#2F4C69',
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  maxWidth: articlepage ? '960px' : '321px',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
    fontSize: '16px',
    padding: '0px 8px 0px 8px',
  },
});

export default [
  CardHorizontalArticleInfo,
  CardMedaiArticleVideo,
  GridHorizontalArticleContainer,
  GridHorizontalArticleMaxWidth,
  ImageHorizonatalArticleStyles,
  TypographyHorizontalArticleDate,
  TypographyHorizontalArticleSubTitle,
  TypographyHorizontalArticleTitle,
];
