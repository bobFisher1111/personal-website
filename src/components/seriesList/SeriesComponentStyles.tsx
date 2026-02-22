import { Theme } from '@mui/material';

export const SeriesGridStyles = {
  display: 'flex',
};

export const SeriesOuterBlockStyles = (
  theme: Theme,
  count: number,
  layout: 'grid' | 'scroller'
) => ({
  px: 0.5,
  width: layout === 'scroller' && count >= 4 ? 'fit-content' : '100%',
  maxWidth: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
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
