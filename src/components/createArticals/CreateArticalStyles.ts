export const ImageGrid = {
  padding: '16px',
  '@media only screen and (max-width: 600px)': {
    padding: '8px',
  },
};

export const CreateArticalImage = () => ({
    height: '394px',
    width: '700px',
    borderRadius: '7px',
    aspectRatio: '16/9',
    '@media only screen and (max-width: 600px)': {
      width: `calc(100vw - ${'72px'})`,
      height: `200px`,
    },
});

export const CreateArticalIndentImage = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '7px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: `200px`,
  },
});

export const CreateArticalVideo = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '7px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: `200px`,
  },
});

export const titleText = {
  borderColor: 'black',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
  maxWidth: '1000px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
    fontSize: "16px",
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 8px 32px',
  },
};

export const sectionText = {
  padding: '16px 0px 0px 0px',
  textIndent: '40px',
  lineHeight: '32px',
  fontSize: '20px',
  fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
  width: '850px',
  alignItems: 'center',
  ':: first-letter': {
    fontWeight: 'bold',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px 32px 0px 32px',
    fontSize: "12px",
    lineHeight: '16px',
    textIndent: '24px',
  },
  '@media only screen and (min-width: 600px)': {
    padding: '8px 62px 0px 62px',
    textIndent: '24px',
    width: '650px',
  },
  '@media only screen and (min-width: 992px)': {
    textIndent: '24px',
  },
  '@media only screen and (min-width: 1200px)': {
    textIndent: '24px',
    width: '850px'
  },
};

export const sectionTextParagraph = {
  width: '1000px',
  padding: '16px 0px 0px 0px',
  textIndent: '60px',
  lineHeight: '32px',
  fontSize: '20px',
  fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
  '@media only screen and (max-width: 600px)': {
    textIndent: '24px',
    padding: '0px',
    fontSize: "12px",
  },
  '@media only screen and (min-width: 600px)': {
    padding: '',
  },
};

export const quoteText = {
  borderColor: 'black',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
  maxWidth: '1000px',
  fontStyle: 'itallic',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 16px 16px 16px',
    fontSize: "12px",
    lineHeight: '16px',
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 32px 32px',
  },
};

export const paragraphText = {
  padding: '16px 0px 0px 0px',
  textIndent: '40px',
  lineHeight: '32px',
  fontSize: '20px',
  fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
  width: '1000px',
  alignItems: 'center',
  ':: first-letter': {
    fontWeight: 'bold',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px 16px 16px 16px',
    fontSize: "12px",
    lineHeight: '16px',
    textIndent: '12px',
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 0px 32px',
  },
};

export default [
  ImageGrid,
  CreateArticalImage,
  CreateArticalVideo,
  CreateArticalIndentImage,
  titleText,
  sectionText,
  sectionTextParagraph,
  quoteText,
  paragraphText,
];
