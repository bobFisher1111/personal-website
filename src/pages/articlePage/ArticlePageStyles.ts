import { SIZES } from 'src/store/redux/theme/CONSTANTS';

export const CreateArticleRoot = {
  '@media only screen and (max-width: 600px)': {
    width: 'calc(100vw - 32px)',
  },
  '@media only screen and (min-width: 600px)': {
    width: '560px',
  },
  '@media only screen and (min-width: 768px)': {
    width: '640px',
  },
  '@media only screen and (min-width: 992px)': {
    width: '700px',
  },
  '@media only screen and (min-width: 1200px)': {
    width: SIZES.maxWidth.article,
  },
};

export const CreateArticleStyle = {
  '@media only screen and (max-width: 600px)': {
    overflowX: "hidden",
  },
};

export const GridRoot = {
  padding: SIZES.spacing.md + ' 0px 200px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 200px 0px',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    width: 'calc(100vw - 75px)'
  },
};

export const GridHeader = {
  width: '100%',
  paddingTop: '76px',
  justifyContent: 'center',
};

export const GridAuthorComponent = {
  '@media only screen and (max-width: 1535px)': {
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
