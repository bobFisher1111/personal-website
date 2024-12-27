export const AuthorComponentGridRoot = (turonarticlepage: boolean) => {
  // come back here 1
  return {
    display: 'flex',
    paddingBottom: '200px',
    maxWidth: turonarticlepage ? '550px' : '1200px',
    margin: 'auto',
    padding: '76px 16px 100px 16px',
    borderLeft: turonarticlepage ? '1px solid #667A6E' : '',
  };
};

export const AuthorComponentGridBiography = {
  padding: '8px 16px 16px 16px',
};

export const AuthorComponentGridBiographyTitle = {
  textAlign: 'fled-start',
  padding: '16px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '20px',
  },
};

export const AuthorComponentGridBiographyText = {
  textAlign: 'fled-start',
  fontSize: '16px',
  textIndent: '15px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const HeaderComponentStyles = {
  '@media only screen and (max-width: 600px)': {
    padding: '16px 0px 0px 0px',
  },
};

export default [
  AuthorComponentGridRoot,
  AuthorComponentGridBiography,
  AuthorComponentGridBiographyTitle,
  AuthorComponentGridBiographyText,
  HeaderComponentStyles,
];
