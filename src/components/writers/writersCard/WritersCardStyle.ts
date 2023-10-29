export const WritersCardGridRoot = {
  padding: '8px 16px 16px 16px',
};

export const WritersCardAvatar = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  '@media only screen and (max-width: 600px)': {
    width: '80px',
    height: '80px',
  },
  '@media only screen and (min-width: 600px)': {
    width: '100px',
    height: '100px',
  },
  '@media only screen and (min-width: 992px)': {
    width: '120px',
    height: '120px',
  },
};

export const WritersCardGridAuthorName = {
  paddingTop: '4px',
  '@media only screen and (max-width: 600px)': {
    padding: '10px 0px 0px 16px',
  },
};

export const WritersCardTextAuthorName = {
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  color: '#2F4C69',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const WritersCardTextAuthorTitle = {
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  color: '#667A6E',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};

export default [
  WritersCardGridRoot,
  WritersCardAvatar,
  WritersCardTextAuthorName,
  WritersCardGridAuthorName,
  WritersCardTextAuthorTitle,
];
