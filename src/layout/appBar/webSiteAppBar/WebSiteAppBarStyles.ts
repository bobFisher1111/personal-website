export const AppBarStyle = {
  display: 'flex',
  maxWidth: "1024px",
  minWidth: "1024px",
  '@media only screen and (max-width: 600px)': {
    maxWidth: "95vw",
    minWidth: "95vw",
  },
  '@media only screen and (min-width: 992px)': {
    margin: 'auto',
  },
};

export default [
  AppBarStyle,
];
