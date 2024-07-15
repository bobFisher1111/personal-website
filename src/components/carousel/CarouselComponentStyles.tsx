export const AlignGridStyles = {
  marginBottom: '25px',
};

export const ArrowButtonGridStyles = {
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export const ArrowButtonIconStyles = {
  width: 35,
  height: 35,
};

export const CarouselComponentGridStyles = {
  overflowX: 'scroll',
  flexWrap: 'nowrap',
  borderBottom: '2px solid rgba(138, 147, 153, 0.25)',
  '@media only screen and (max-width: 600px)': {
    borderBottom: 'none',
  },
  '&::-webkit-scrollbar': {
    display: 'none'
  },
};
