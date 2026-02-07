import { Theme } from '@mui/material';

export const SeriesOuterBlockStyles = (count: number) => ({
  px: 0.5,
  width: count >= 4 ? 'fit-content' : '100%',
  maxWidth: '100%',
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
