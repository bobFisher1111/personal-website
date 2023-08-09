import {
    styled,
} from "@mui/material";

export const ImageHorizonatalArticals = (articalPage: any) => ({
    height: `${articalPage} ? '576px' : '181px'`,
    borderRadius: '7px',
    aspectRatio: '16/9',
    width: articalPage ? '960px' : '321px',
    '@media only screen and (max-width: 600px)': {
      width: 'calc(100vw - 48px)',
    },
    '@media only screen and (min-width: 600px)': {
      width: 'calc(100vw - 48px)',
    },
    '@media only screen and (min-width: 768px)': {
      width: articalPage ? '960px' : '321px',
    },
    '@media only screen and (min-width: 992px)': {
      width: articalPage ? '960px' : '321px',
    },
    '@media only screen and (min-width: 1200px)': {
      width: articalPage ? '960px' : '321px',
    },
});

export default [
  ImageHorizonatalArticals,
];
