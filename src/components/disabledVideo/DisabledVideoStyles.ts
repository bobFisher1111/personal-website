export const RootStyles = (theme: boolean, articlepage: boolean) => ({
  borderRadius: '6px',
  backgroundColor: theme ? 'black' : 'white',
  maxHeight: '100%',
  minHeight: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  border: '1px solid black',
  height: articlepage ? '450px' : '',
});

export const YouTubeDisabledStyle = {
  height: '20px',
  '@media only screen and (max-width: 600px)': {
    height: '15px',
  },
};
