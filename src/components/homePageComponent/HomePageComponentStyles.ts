export const CarouselGrid = {
  padding: '32px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '16px 0px 0px 0px',
  },
};

export const GridAlignItems = {
  padding: '60px 16px 16px 16px',
  width: '1200px',
  margin: 'auto',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 200px 0px',
    width: 'calc(100vw)',
  },
};

export const GridRoot = {
  width: '1200px',
  display: 'flex',
  margin: 'auto',
  padding: '60px 16px 200px 16px',
  '@media only screen and (max-width: 600px)': {
    padding: '60px 16px 8px 16px',
    width: 'calc(100vw)',
  },
};

export const HeaderTitleStyles = {
  textAlign: 'center',
  fontSize: '36px',
  lineHeight: '40px',
  padding: '25px 0px 0px 0px',
  '@media (min-width: 601px)': {
    display: 'none',
  },
};

export const HomePageImage = {
  padding: '24px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '12px 0px 0px 0px',
  },
};

export const LatestTextStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const SectionNotSelectedStyles = (theme: boolean) => ({
  color: theme ? '#9DB2BF' : '#0C0D0D',
  marginRight: '8px',
  padding: '4px',
  fontSize: '22px',
  cursor: 'pointer',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
});

export const SectionSelectedStyles = (theme: boolean) => ({
  marginRight: '8px',
  padding: '2px 4px 2px 4px',
  borderRadius: '4px',
  border: theme ? '1px solid #9DB2BF' : '',
  color: theme ? '#9DB2BF' : 'white',
  background: '#0C0D0D',
  fontSize: '22px',
  cursor: 'pointer',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
});

export const SeriesIconStyles = {
  fontSize: '26px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '20px',
  },
};

export const SeriesButtonStyles = {
  textTransform: 'initial',
  '&.MuiButtonBase-root': {
    '&.MuiButton-root': {
      padding: '0px',
    },
  },
};

export const SeriesGridStyles = {
  width: '1200px',
  margin: 'auto',
  '@media (max-width: 600px)': {
    width: 'calc(100vw)',
  }
};

export const SeriesTextStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};
