export const seriesComponentGridRoot = {
  background: '#fff',
  display: 'flex',
  maxWidth: '1024px',
  margin: 'auto',
  padding: '40px 16px 100px 16px',
};

export const seriesComponentGridHeader = {
  alignItems: 'center',
};

export const seriesComponentGridArticleInfo = {
  padding: '32px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 16px 0px'
  },
};

export const seriesComponentTitle = {
  fontSize: '20px',
  padding: '0px 16px 0px 16px',
  color: '#0C0D0D',
  '@media only screen and (max-width: 600px)': {
    fontSize: '20px',
  },
};

export const seriesComponentSubTitle = {
  color: '#0C0D0D',
  fontSize:'16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  // fontFamily: 'sans-serif',
  padding: '0px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
};

export const seriesComponentdate = {
  fontSize:'14px',
  color: 'grey',
  padding: '0px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
};
  
export default [
  seriesComponentGridRoot,
  seriesComponentGridHeader,
  seriesComponentGridArticleInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentdate,
];
  