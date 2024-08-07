export const GridAlignItems = {
  padding: '0px 16px 16px 16px',
  maxWidth: '1200px',
  margin: 'auto',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 200px 0px',
  },
};

export const GridRoot = {
  // minHeight: '100vh',
  display: 'flex',
  margin: 'auto',
  padding: '60px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    padding: '60px 16px 8px 16px',
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

export const SectionNotSelectedStyles = {
  color: '#0C0D0D',
  marginRight: '8px',
  padding: '4px',
  fontSize: '22px',
  cursor: 'pointer',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const SectionSelectedStyles = {
  marginRight: '8px',
  padding: '2px 4px 2px 4px', // 0.5em
  border: '2px solid #0C0D0D',
  borderRadius: '4px',
  background: '#0C0D0D',
  color: 'white',
  fontSize: '22px',
  cursor: 'pointer',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

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
  maxWidth: '1200px',
  margin: 'auto',
  // padding: '28px 0px 8px 0px',
  '@media only screen and (max-width: 600px)': {
    // padding: '0px 0px 8px 0px',
  },
};

export const SeriesTextStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};
