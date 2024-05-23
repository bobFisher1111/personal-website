export const AboutCompGridRoot = {
  display: 'flex',
  margin: 'auto',
  padding: '36px 24px 100px 24px',
  maxWidth: '1024px',
};

export const AboutCompGridSocialMediaStyle = {
  '& .MuiGrid-root': {
  }
};
  
export const AboutCompAboutTitle = {
  fontSize: '24px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '22px',
  },
};

export const AboutCompTitles = {
  fontSize: '24px',
  padding: '35px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '22px',
  },
};

export const AboutCompAboutText = {
  '@media only screen and (max-width: 600px)': {
    fontSize: '18px',
  },
};

export const AboutCompAboutTextWithPAdding = {
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
