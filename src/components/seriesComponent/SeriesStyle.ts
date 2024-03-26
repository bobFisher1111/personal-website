export const GridMarginLeft = {
  margin: '0px 0px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    margin: '0px',
  },
};

export const GridSeriesReadMoreMargin = {
  margin: '0px 0px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    margin: '0px 0px 16px 0px',
    justifyContent: 'center',
  },
  '@media only screen and (min-width: 600px)': {
    padding: '0px 0px 0px 30px',
    justifyContent: 'center',
  },
  '@media only screen and (min-width: 992px)': {
    padding: '0px',
  },
};

export const GridSeriesArticleList = {
  padding: '0px 0px 16px 0px',
  '@media only screen and (min-width: 768px)': {
    padding: '0px 0px 0px 16px',
  },
  '@media only screen and (min-width: 992px)': {
    padding: '0px',
  },
};

export const GridSeriesRoot = {
  padding: '10px 0px 0px 0px',
};

export const TypographySeriesArticleDate = {  
  color: '#76468c',
  padding: '0px 0px 0px 16px',
  fontSize:'14px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    padding: '0px 8px 0px 8px',
  },
};

export const TypographySeriesArticleSubTitle = {
  color: '#667A6E',
  fontSize:'16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  '@media only screen and (max-width:820px)': {
    padding: '0px',
  },
  '@media only screen and (min-width: 600px)': {
    padding: '0px 0px 0px 16px',
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    padding: '0px 8px 0px 8px',
    WebkitLineClamp: '2',
  },
};

export const TypographySeriesArticleTitle = {
  color: '#2F4C69',
  padding: '0px 0px 0px 16px',
  fontSize:'20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
    padding: '0px 8px 0px 8px',
  },
};

export const TypographySeriesTitle = {  
  color: '#2F4C69',
  padding: '16px 0px 16px 0px',
  fontSize: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
    padding: '16px 0px 8px 0px',
    WebkitBoxOrient: 'unset',
  },
};

export default [
  GridMarginLeft,
  GridSeriesReadMoreMargin,
  GridSeriesArticleList,
  GridSeriesRoot,
  TypographySeriesArticleDate,
  TypographySeriesArticleSubTitle,
  TypographySeriesArticleTitle,
  TypographySeriesTitle,
];
