export const WritersCardGridRoot = {
  padding: '8px 16px 16px 16px',
};

export const WritersCardAvatar = {
  width: '120px',
  height: '120px',
  borderRadius: '8px',
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
    padding: '0px 0px 0px 16px',
  },
};

export const WritersCardTextAuthorName = {
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  color: '#0C0D0D',
  '@media only screen and (max-width: 600px)': {
    fontSize: '20px',
  },
};

export const WritersCardTextAuthorTitle = {
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  color: 'grey',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export default [
  WritersCardGridRoot,
  WritersCardAvatar,
  WritersCardTextAuthorName,
  WritersCardGridAuthorName,
  WritersCardTextAuthorTitle,
];
