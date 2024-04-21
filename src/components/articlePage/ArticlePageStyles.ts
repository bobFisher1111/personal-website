export const CreateArticleRoot = {
  '@media only screen and (max-width: 600px)': {
    minWidth: 'calc(100vw - 16px)',
    maxWidth: 'calc(100vw - 16px)',
  },
  '@media only screen and (min-width: 600px)': {
    width: '600px',
  },
  '@media only screen and (min-width: 768px)': {
    width: '730px',
  },
  '@media only screen and (min-width: 992px)': {
    width: '960px',
  },
  '@media only screen and (min-width: 1200px)': {
    width: '960px',
  },
};

export const CreateArticleStyle = {
  '@media only screen and (max-width: 600px)': {
    overflowX: "hidden",
  },
};

export const GridRoot = {
  paddingBottom: '200px',
  // border: '10px solid blue',
};

export const GridHeader = {
  paddingTop: '38px',
};

export const GridAuthorComponent = {
  '@media only screen and (max-width: 1200px)': {
    display: 'none',
  },
};

export default [
  CreateArticleRoot,
  CreateArticleStyle,
  GridRoot,
  GridHeader,
  GridAuthorComponent,
];
