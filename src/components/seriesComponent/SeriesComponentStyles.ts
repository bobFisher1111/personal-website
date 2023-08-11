export const seriesComponentGridRoot = {
  background: '#fff',
  display: 'flex',
  maxWidth: "1024px",
  margin: 'auto',
  padding: '40px 16px 100px 16px',
};

export const seriesComponentGridHeader = {
  alignItems: 'center',
};

export const seriesComponentGridArticalInfo = {
  padding: '32px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '16px 0px 16px 0px'
  },
};

export const seriesComponentTitle = {
  fontSize: '20px',
  padding: '0px 16px 0px 16px',
  color: '#2F4C69',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const seriesComponentSubTitle = {
  color: '#667A6E',
  fontSize:'16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  padding: '0px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};

export const seriesComponentdate = {
  fontSize:'14px',
  color: '#76468c',
  padding: '0px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};
  
export default [
  seriesComponentGridRoot,
  seriesComponentGridHeader,
  seriesComponentGridArticalInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentdate,
];
  