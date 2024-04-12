export const AboutCompGridRoot = {
  background: '#fff',
  display: 'flex',
  margin: 'auto',
  padding: '36px 24px 100px 24px',
  maxWidth: '1024px',
};

export const AboutCompGridSocialMediaStyle = {
  '& .MuiGrid-root': {
    justifyContent: 'center'
  }
};
  
export const AboutCompAboutTitle = {
  fontSize: '24px',
  textAlign: 'center',
  color: '#2F4C69',
  '@media only screen and (max-width: 600px)': {
    fontSize: '22px',
  },
};

export const AboutCompTitles = {
  fontSize: '24px',
  textAlign: 'center',
  color: '#2F4C69',
  padding: '35px 0px 12px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '22px',
  },
};

export const AboutCompAboutText = {
  textAlign: 'center',
  // color: '#667A6E',
  color: '#0C0D0D',
  '@media only screen and (max-width: 600px)': {
    fontSize: '18px',
  },
};

export const AboutCompAboutTextWithPAdding = {
  textAlign: 'center',
  color: '##0C0D0D',
  padding: '0px 8px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '18px',
  },
};

export default [
  AboutCompGridRoot,
  AboutCompGridSocialMediaStyle,
  AboutCompAboutTitle,
  AboutCompTitles,
  AboutCompAboutText,
  AboutCompAboutTextWithPAdding,
];
  