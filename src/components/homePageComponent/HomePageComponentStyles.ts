export const GridAlignItems = {
  padding: '0px 16px 200px 16px',
  maxWidth: "1024px",
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

export default [
  GridAlignItems,
  GridRoot,
]