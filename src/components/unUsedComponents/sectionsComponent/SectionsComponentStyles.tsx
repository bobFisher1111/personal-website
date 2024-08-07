export const ButtonBorderLeftStyles = (theme: boolean) => ({
  height: '55px',
  width: '216px',
  textTransform: 'initial',
  fontSize: '16px',
  '&.MuiButtonBase-root': {
    '&.MuiButton-root': {
      borderRadius: '0px',
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
  },
  '&:hover': {
    backgroundColor: theme ? '#9DB2BF' : '#0C0D0D',
    color: theme ? '#0C0D0D' : 'white',
  },
  '@media only screen and (min-width: 928px)': {
    height: '45px',
    width: '120px',
  },
  '@media only screen and (max-width: 928px)': {
    height: '45px',
    width: '120px',
  },
  '@media only screen and (max-width: 600px)': {
    height: '30px',
    width: '80px',
    fontSize: '14px',
  },
});

export const ButtonBorderRightStyles = (theme: boolean) => ({
  height: '55px',
  width: '216px',
  textTransform: 'initial',
  fontSize: '16px',
  '&.MuiButtonBase-root': {
    '&.MuiButton-root': {
      borderRadius: '0px',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  },
  '&:hover': {
    backgroundColor: theme ? '#9DB2BF' : '#0C0D0D',
    color: theme ? '#0C0D0D' : 'white',
  },
  '@media only screen and (min-width: 600px)': {
    height: '45px',
    width: '120px',
  },
  '@media only screen and (max-width: 928px)': {
    height: '45px',
    width: '120px',
  },
  '@media only screen and (max-width: 600px)': {
    height: '30px',
    width: '80px',
    fontSize: '14px',
  },
});

export const ButtonStyles = (theme: boolean) => ({
  height: '55px',
  width: '216px',
  textTransform: 'initial',
  fontSize: '16px',
  '&.MuiButtonBase-root': {
    '&.MuiButton-root': {
      borderRadius: '0px',
    }
  },
  '&:hover': {
    backgroundColor: theme ? '#9DB2BF' : '#0C0D0D',
    color: theme ? '#0C0D0D' : 'white',
  },
  '@media only screen and (min-width: 600px)': {
    height: '45px',
    width: '120px',
  },
  '@media only screen and (max-width: 928px)': {
    height: '45px',
    width: '120px',
  },
  '@media only screen and (max-width: 600px)': {
    height: '30px',
    width: '80px',
    fontSize: '14px',
  },
});

export const Rootstyle = {
  maxWidth: '100%',
  minWidth: '100%',
  width: '1080px',
  padding: '0px 0px 16px 0px',
};

export default [
  ButtonBorderLeftStyles,
  ButtonBorderRightStyles,
  ButtonStyles,
  Rootstyle,
];
