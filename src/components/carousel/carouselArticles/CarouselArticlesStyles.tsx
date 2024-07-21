export const ArticleDateGridStyles = {
  padding: '16px 32px',
  '@media only screen and (max-width: 600px)': {
    padding: '8px 16px',
  },
};

export const ArticleDateStyles = (theme: boolean) => ({
  color: theme ? '#9DB2BF' : 'white',
  '@media only screen and (max-width: 379px)': {
    fontSize: '12px',
  },
  '@media only screen and (min-width: 380px)': {
    fontSize: '14px',
  },
  '@media only screen and (min-width: 600px)': {
    fontSize: '16px',
  },
});

export const ArticleSubtitleGridStyles = {
  padding: '0px 16px 32px 16px',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export const ArticleTitleGridStyles = {
  padding: '0px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 8px',
  },
};

export const ArticleTitleStyles = (theme: boolean) => ({
  color: theme ? '#9DB2BF' : 'white',
  fontSize: '22px',
  fontWeight: 'bold',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
    padding: '0px 16px 16px 16px',
  },
});

export const AuthorNameStyles = (theme: boolean) => ({
  color: theme ? '#9DB2BF' : 'white',
  padding: '0px 0px 0px 8px',
  alignContent: 'center',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
});

export const AvatarAuthorLinkStyles = (theme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  color: theme ? '#9DB2BF' : 'rgba(0, 0, 0, 0.6)',
});

export const AvatarGridStyles = {
  display: 'flex',
  padding: '16px',
  '@media only screen and (max-width: 600px)': {
    padding: '8px',
  },
  
};

export const AvatarImageStyles = (theme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: theme ? '1px solid #9DB2BF' : '1px solid white',
  // border: theme ? '1px solid red' : '1px solid purple',
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
});

export const CardMedaiArticleVideo = (articlepage: boolean) => ({
  height: `${articlepage} ? '576px' : '515px'`,
  border: '0px',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  aspectRatio: '16/9',
  marginRight: '16px',
  '@media only screen and (min-width: 350px)': {
    width: '280px',
    margin: '0px 8px',
  },
  '@media only screen and (min-width: 380px)': {
    width: '300px',
    margin: '0px 8px',
  },
  '@media only screen and (min-width: 410px)': {
    width: '330px',
    margin: '0px 8px',
  },
  '@media only screen and (min-width: 600px)': {
    width: '350px',
  },
  '@media only screen and (min-width: 700px)': {
    width: '400px',
  },
  '@media only screen and (min-width: 800px)': {
    width: '500px',
  },
  '@media only screen and (min-width: 900px)': {
    width: '600px',
  },
  '@media only screen and (min-width: 1000px)': {
    width: '700px',
  },
  '@media only screen and (min-width: 1100px)': {
    width: '800px',
  },
  '@media only screen and (min-width: 1250px)': {
    width: '900px',
  },
});

export const ImageVideoStyles = {
  // borderRadius: '8px',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  marginRight: '16px',
  '@media only screen and (max-width: 600px)': {
    marginRight: '0px',
  },
};

export const ImageGridStyles = (theme: boolean) => ({
  maxWidth: '100%',
  borderBottom: theme ? '2px solid #9DB2BF' : '2px solid white',
  '@media only screen and (min-width: 350px)': {
    width: '280px',
  },
  '@media only screen and (min-width: 380px)': {
    width: '300px',
  },
  '@media only screen and (min-width: 410px)': {
    width: '330px',
  },
  '@media only screen and (min-width: 600px)': {
    width: '350px',
  },
  '@media only screen and (min-width: 700px)': {
    width: '400px',
  },
  '@media only screen and (min-width: 800px)': {
    width: '500px',
  },
  '@media only screen and (min-width: 900px)': {
    width: '600px',
  },
  '@media only screen and (min-width: 1000px)': {
    width: '700px',
  },
  '@media only screen and (min-width: 1100px)': {
    width: '800px',
  },
  '@media only screen and (min-width: 1250px)': {
    width: '900px',
  },
});

export const RootStyles = (theme: boolean) => ({
  marginBottom: '30px',
  maxWidth: '100%',
  background: '#0C0D0D',
  border: theme ? '1px solid #9DB2BF' : '1px solid #0C0D0D',
  borderRadius: '8px',
  width: '900px',
  marginRight: '16px',
  '@media only screen and (max-width: 600px)': {
    marginBottom: '0px',
  },
});
