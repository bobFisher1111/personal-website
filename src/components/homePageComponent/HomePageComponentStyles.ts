export const GridAlignItems = {
  padding: '0px 16px 200px 16px',
  maxWidth: '1024px',
  margin: 'auto',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 200px 0px',
  },
};

export const GridRoot = {
  background: '#fff',
  minHeight: '100vh',
  display: 'flex',
  margin: 'auto',
  padding: '36px 16px 0px 16px',
};

export const HeaderTitleStyles = {
  textAlign: 'center',
  color: '#2F4C69',
  fontSize: '36px',
  lineHeight: '40px',
  padding: '25px 0px 0px 0px',
  '@media (min-width: 601px)': {
    display: 'none',
  },
};

export const HomePageImage = {
  padding: '32px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export default [
  GridAlignItems,
  GridRoot,
];