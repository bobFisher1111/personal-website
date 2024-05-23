export const ContentCopyIconStyle = (prop: string, padding: any) => ({
  color: prop,
  padding: padding,
  cursor: 'pointer',
  '&:hover': {
    color: '#2F4C69',
  },
  width: '40px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
    padding: '2px 0px 0px 8px',
    height: '20px',
  },
});

export const EmailOutlinedIconStyles = ( prop: string ) => ({
  height: '30px',
  cursor: 'pointer',
  color: prop,
  '&:hover': {
    color: '#2F4C69',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
});

export default [
  ContentCopyIconStyle,
  EmailOutlinedIconStyles,
];
