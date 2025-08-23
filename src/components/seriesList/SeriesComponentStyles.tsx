import { Theme } from '@mui/material';

export const AlignGridStyles = (theme: Theme) => ({
  marginBottom: theme.spacing(3.125), // 25px
});

export const ArrowButtonGridStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const ArrowButtonIconStyles = {
  width: 35,
  height: 35,
};

export const CarouselComponentGridStyles = (theme: Theme) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: 'none',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
