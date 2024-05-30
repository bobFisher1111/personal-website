export const ContentCopyIconStyle = (theme: boolean, padding: any) => ({
  color: theme ? '#9DB2BF' : '#0C0D0D',
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

export const EmailOutlinedIconStyles = ( theme: boolean ) => ({
  height: '30px',
  cursor: 'pointer',
  color: theme ? '#9DB2BF' : '#0C0D0D',
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
