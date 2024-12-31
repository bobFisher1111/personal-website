export const CardMediaVerticalCardImage = {
  '@media only screen and (min-width: 600px)': {
    height: '200px',
  },
  '@media only screen and (max-width: 600px)': {
    '&.MuiCardMedia-root': {
      maxHeight: '50px',
    },
  },
};

export const CardRootStyle = {
  position: 'relative',
};

export const CardFooterStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: '#0C0D0D',
  opacity: 0.80,
};

export const CardVerticalCard = (theme: boolean) => ({
  border: theme ? '1px solid #9DB2BF' : '#0C0D0D',
  width: '276px',
  boxShadow: 'none',
  '@media only screen and (max-width: 635px)': {
    width: '272px',
  },
  '@media only screen and (max-width: 600px)': {
    width: '570px',
  },
});

export const DivVerticalArticleRoot = () => ({
  padding: '8px 8px 8px 0px',
});

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

export const TypographyVerticalCardNameStyleHover = (theme: boolean) => ({
  color: theme ? '#9DB2BF' : 'white',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  padding: '16px',
  fontWeight: '900',
  textShadow: 'none',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
});
