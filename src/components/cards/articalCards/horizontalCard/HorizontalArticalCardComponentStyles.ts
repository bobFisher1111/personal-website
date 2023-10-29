export const CardHorizontalArticalInfo = ( articalpagelist: boolean ) => ({
  maxWidth: '740px',
  backgroundColor: 'white',
  boxShadow: 'none',
  padding: !articalpagelist ? '4px 0px 0px 24px' : '',
  '@media only screen and (min-width: 768px)': {
    maxWidth: '45%',
  },
  '@media only screen and (min-width: 992px)': {
    minWidth: '321px',
    maxWidth: '321px',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
});

export const CardMedaiArticalVideo = (articalpage: boolean, videoHeight: boolean, mobileImageWidth?: string) => ({
  height: articalpage ? '576px' : '181px',
  border: '0px',
  borderRadius: '7px',
  // artical video
  '@media only screen and (max-width: 600px)': {
    maxWidth: `calc(100vw - ${mobileImageWidth})`,
    minWidth: `calc(100vw - ${mobileImageWidth})`,
    height: '200px',
  },
  '@media only screen and (min-width: 600px)': {
    maxWidth: 'calc(100vw - 48px)',
    minWidth: 'calc(100vw - 48px)',
  },
  // here
  '@media only screen and (min-width: 768px)': {
    minWidth: articalpage ? `calc(100vw - ${mobileImageWidth})` : '321px',
    maxWidth: articalpage ? `calc(100vw - ${mobileImageWidth})` : '321px',
    height: articalpage ? '450px': videoHeight ? '444px' : '200px',
  },
  '@media only screen and (min-width: 992px)': {
    minWidth: articalpage ? '960px' : '321px',
    maxWidth: articalpage ? '960px' : '321px',
  },
  '@media only screen and (min-width: 1200px)': {
    minWidth: articalpage ? '960px' : '321px',
    maxWidth: articalpage ? '960px' : '321px',
  },
});

export const GridHorizontalArticalContainer = {
  width: '100%',
  background: '#fff',
  display: 'flex',
  margin: '0px 0px 16px 0px',
};

export const GridHorizontalArticalMaxWidth = (imagewidth: string) => ({
  maxWidth: imagewidth,
});

export const ImageHorizonatalArticalsStyles = (articalPage: any, imageWidth?: any) => ({
  height: `${articalPage} ? '576px' : '181px'`,
  borderRadius: '7px',
  aspectRatio: '16/9',
  width: articalPage ? '960px' : '321px',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${imageWidth})`
  },
  '@media only screen and (min-width: 600px)': {
    width: `calc(100vw - ${imageWidth})`,
  },
  '@media only screen and (min-width: 768px)': {
    width: articalPage ? `calc(100vw - ${imageWidth})` : '321px',
  },
  '@media only screen and (min-width: 992px)': {
    width: articalPage ? '960px' : '321px',
  },
  '@media only screen and (min-width: 1200px)': {
    width: articalPage ? '960px' : '321px',
  },
});

export const TypographyHorizontalArticalDate = {
  fontSize: '14px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    padding: '0px 4px 0px 4px',
  },
};

export const TypographyHorizontalArticalSubTitle = (articalpage: boolean, cardtextwidth: string) => ({
  color: '#667A6E',
  fontSize: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  maxWidth: articalpage ? '321px' : `${cardtextwidth} !important`,
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    padding: '0px 4px 0px 4px',
  },
});

export const TypographyHorizontalArticalTitle = (articalpage: boolean) => ({
  color: '#2F4C69',
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  maxWidth: articalpage ? '960px' : '321px',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
    fontSize: '16px',
    padding: '0px 8px 0px 8px',
  },
});

export default [
  CardHorizontalArticalInfo,
  CardMedaiArticalVideo,
  GridHorizontalArticalContainer,
  GridHorizontalArticalMaxWidth,
  ImageHorizonatalArticalsStyles,
  TypographyHorizontalArticalDate,
  TypographyHorizontalArticalSubTitle,
  TypographyHorizontalArticalTitle,
];
