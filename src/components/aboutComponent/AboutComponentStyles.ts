export const AboutCompGridRoot = {
  background: '#fff',
  display: 'flex',
  margin: 'auto',
  padding: '36px 24px 100px 24px',
  maxWidth: "1024px",
};
  
export const AboutCompAboutTitle = {
  fontSize: '24px',
  textAlign: 'center',
  color: '#2F4C69',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const AboutCompTitles = {
  fontSize: '24px',
  textAlign: 'center',
  color: '#2F4C69',
  padding: '35px 0px 12px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const AboutCompAboutText = {
  textAlign: 'center',
  color: '#667A6E',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
   },
};

export const AboutCompAboutTextWithPAdding = {
  textAlign: 'center',
  color: '#667A6E',
  padding: '0px 8px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
  },
};

export default [
  AboutCompGridRoot,
  AboutCompAboutTitle,
  AboutCompTitles,
  AboutCompAboutText,
  AboutCompAboutTextWithPAdding,
];
  