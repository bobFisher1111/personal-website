export const GridPaddingArticalList = {
  padding: '16px',
  '@media only screen and (max-width: 600px)': {
    padding: '12px'
  },
};

export const GridPaddingTop = {
  paddingTop:'16px',
};

export const TypographyArticalPageArticals =  ({
  fontSize: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  '@media only screen and (min-width: 992px)': {
    minWidth: '321px',
    maxWidth: '321px',
  },
});

export const TypographyHorizontalArticalTitleArticalList = (articalpage: boolean) => ({
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
    fontSize: '16px',
    padding: '0px 0px 8px 0px',
    WebkitBoxOrient: 'unset',
  },
  '@media only screen and (min-width: 600px)': {
    display: 'none',
  },
});

export default [
  GridPaddingArticalList,
  GridPaddingTop,
  TypographyArticalPageArticals,
  TypographyHorizontalArticalTitleArticalList,
];
  