export const AuthorAboutGridFavorites = (turnpaaddingon: boolean) => {
  return {
    padding: turnpaaddingon ? '16px' : '32px',
    '@media only screen and (max-width: 600px)': {
      padding: '16px',
    },
  };
};

export const AuthorAboutFavoritesHeader = {
  color: '#667A6E',
  paddingRight: '8px',
  fontSize: '20px',
  padding: '16px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const AuthorAboutFavoritesGridTitle = {
  padding: '2px 16px 2px 16px',
  display: 'flex',
};

export const AuthorAboutFavoritesTitle = {
  paddingRight: '8px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};

export const AuthorAboutAuthorsFavoritesResponse = {
  // fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: '1rem',
  lineHeight: '1.5',  
  paddingRight: '4px',
  color: '#551A8B',
  '&:hover': {
    color: '#667A6E',
  },  
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },   
};

export default [
  AuthorAboutGridFavorites,
  AuthorAboutFavoritesHeader,
  AuthorAboutFavoritesGridTitle,
  AuthorAboutFavoritesTitle,
  AuthorAboutAuthorsFavoritesResponse,
];
