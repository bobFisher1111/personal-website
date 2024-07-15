export const ArticleDateGridStyles = {
  padding: '16px 32px',
};

export const ArticleDateStyles = {
  '@media only screen and (max-width: 379px)': {
    fontSize: '12px',
  },
  '@media only screen and (min-width: 380px)': {
    fontSize: '14px',
  },
  '@media only screen and (min-width: 600px)': {
    fontSize: '16px',
  },
};

export const ArticleSubtitleGridStyles = {
  padding: '0px 16px',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export const ArticleTitleGridStyles = {
  padding: '0px 16px 8px 16px',
};

export const ArticleTitleStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px'
  },
};

export const AuthorNameStyles = {
  padding: '0px 0px 0px 8px',
  alignContent: 'center',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
};

export const AvatarAuthorLinkStyles = (theme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  color: theme ? '#9DB2BF' : 'rgba(0, 0, 0, 0.6)',
});

export const AvatarGridStyles = {
  display: 'flex',
  padding: '16px',
};

export const AvatarImageStyles = (theme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: theme ? '1px solid #9DB2BF' : '1px solid black',
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
});

export const CardMedaiArticleVideo = (articlepage: boolean) => ({
  height: `${articlepage} ? '576px' : '515px'`,
  border: '0px',
  borderRadius: '8px',
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
  borderRadius: '8px',
  marginRight: '16px',
  '@media only screen and (max-width: 600px)': {
    marginRight: '0px',
  },
};

export const ImageGridStyles = {
  maxWidth: '100%',
  margin: '0px 16px',
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
};

export const RootStyles = {
  marginBottom: '30px',
  maxWidth: '100%',
  '@media only screen and (max-width: 600px)': {
    marginBottom: '0px',
  },
};
