export const CardMediaVerticalCardImage = {
  '@media only screen and (min-width: 600px)': {
    height: '400px',
  },
  '@media only screen and (max-width: 600px)': {
    '&.MuiCardMedia-root': {
      maxHeight: '224px',
    },
  },
};

export const CardMediaVerticalCardVideo = {
  border: '0px',
  borderRadius: '4px',
};

export const CardRootStyle = {
  position: 'relative',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

export const CardFooterStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: '#0C0D0D',
  opacity: 0.70,
};

export const CardVerticalCard = (theme: boolean) => ({
  border: theme ? '1px solid #9DB2BF' : '#0C0D0D',
  width: '365px',
  '@media only screen and (max-width: 992px)': {
    width: '321px',
  },
  '@media only screen and (min-width: 992px)': {
    width: '345px',
  },
  // series
  '@media only screen and (max-width: 600px)': {
    minWidth: 'calc(100vw - 32px)',
    maxWidth: 'calc(100vw - 32px)',
  },
});

export const DivVerticalArticleRoot = () => ({
  padding: '0px 0px 16px 0px',
});

export const GridVeriticalCardVideo = {
  maxWidth: '345px',
  minWidth: '345px',
  height: '400px',
  '@media only screen and (max-width: 600px)': {
    minWidth: 'calc(100vw - 32px)',
    maxWidth: 'calc(100vw - 32px)',
    height: '200px',
  },
  '@media only screen and (min-width: 600px)': {
    minWidth: '321px',
    maxWidth: '365px',
  },
};

export const GridPadding = {
  padding: '16px',
};

export const TypographyVerticalCardNameStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  padding: '16px'
};

export const TypographyVerticalCardNameStyleHover = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  padding: '16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};

export default [
  CardMediaVerticalCardImage,
  CardMediaVerticalCardVideo,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  GridPadding,
  GridVeriticalCardVideo,
  TypographyVerticalCardNameStyle,
  TypographyVerticalCardNameStyleHover,
];
