export const GridAlignItems = {
  padding: '36px 16px 200px 16px',
  maxWidth: '1024px',
  margin: 'auto',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 200px 0px',
  },
};

export const GridRoot = {
  minHeight: '100vh',
  display: 'flex',
  margin: 'auto',
  padding: '36px 16px 0px 16px',
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
  padding: '50px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '25px 0px 0px 0px',
  },
};

export default [
  GridAlignItems,
  GridRoot,
];
