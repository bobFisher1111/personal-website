export const AuthorComponentGridRoot = (turonarticalpage: boolean) => {
  return {
    background: '#fff',
    display: 'flex',
    paddingBottom: '200px',
    maxWidth: '1024px',
    margin: 'auto',
    padding: '40px 16px 100px 16px',
    borderLeft: turonarticalpage ? '1px solid #667A6E' : '',
  };
};

export const AuthorComponentGridBiography = {
  padding: '8px 16px 16px 16px',
};

export const AuthorComponentGridBiographyTitle = {
  textAlign: 'fled-start',
  color: '#667A6E',
  padding: '16px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const AuthorComponentGridBiographyText = {
  textAlign: 'fled-start',
  fontSize: '16px',
  textIndent: '15px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};

export default [
  AuthorComponentGridRoot,
  AuthorComponentGridBiography,
  AuthorComponentGridBiographyTitle,
  AuthorComponentGridBiographyText,
];
