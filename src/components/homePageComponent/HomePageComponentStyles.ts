export const CarouselGrid = {
  padding: '32px 0px 16px 0px',
  '@media screen and (min-width: 601px) and (max-width: 1024px) and (orientation: landscape)': {
    padding: '16px 0px 8px 0px',
  },
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
  padding: '90px 16px 200px 16px',
  '@media only screen and (max-width: 600px)': {
    padding: '76px 16px 8px 16px',
    width: 'calc(100vw)',
  },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    height: '500px',
    width: 'calc(100vw - 16px)',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    width: 'calc(100vw)',
  }
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
