export const WritersGridRoot = {
  background: '#fff',
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: "1024px",
  margin: 'auto',
  padding: '40px 24px 0px 24px',
};

export const WritersCardGrid = {
  background: '#fff',
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: "1024px",
  margin: 'auto',
  padding: '16px 24px 0px 24px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 24px 0px 24px',
   },
};

export default [
  WritersGridRoot,
  WritersCardGrid,
];
