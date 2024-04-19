export const BulletListChildLinkStyles = {
  color: "#087EA4",
  fontSize: "24px",
  // alignItems: "flex-start",
  width: "850px",
  padding: '16px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    textIndent: '24px',
    fontSize: "18px",
    padding: '0px',
    minWidth: `calc(100vw - ${'48px'})`,
    maxWidth: `calc(100vw - ${'48px'})`,
  },
};

export const ImageGrid = {
  padding: '16px',
  '@media only screen and (max-width: 600px)': {
    padding: '8px',
  },
};

export const CreateArticleImage = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '7px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: '200px',
  },
});

export const CreateArticleIndentImage = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '7px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: '200px',
  },
});

export const CreateArticleVideo = () => ({
  height: '394px',
  width: '700px',
  borderRadius: '7px',
  aspectRatio: '16/9',
  '@media only screen and (max-width: 600px)': {
    width: `calc(100vw - ${'72px'})`,
    height: '200px',
  },
});

export const LinkStyles = {
  color: "#087EA4",
  fontSize: "24px",
  // alignItems: "flex-start",
  width: "850px",
  padding: '16px 16px 0px 16px',
  '@media only screen and (max-width: 600px)': {
    fontSize: "18px",
    padding: '0px 16px 0px 16px',
    minWidth: `calc(100vw - ${'32px'})`,
    maxWidth: `calc(100vw - ${'32px'})`,
  },
};

export const ParagraphTitleRoot = {
  // width: '850px',
  // position: 'sticky'
  // display: 'flex',
  // justifyContent: 'flex-start',
  // maxWidth: '1000px',
  // minWidth: '1000px'
  '@media only screen and (max-width: 600px)': {
    justifyContent: 'flex-start',
  // padding: '0px 16px, 0px 16px',
  // minWidth: `calc(100vw - ${'16px'})`,
  // maxWidth: `calc(100vw - ${'16px'})`,
  },
};

export const titleText = {
  borderColor: '#0C0D0D',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',

  // maxWidth: '100rem',
  // minWidth: 'calc(100vw-64)',
  // marginLeft: 'auto',
  // marginLight: 'auto',

  // justifyContent: "flex-start",
  // alignItems: "flex-start",
  // width: '1000px',
  // position: 'relative',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    padding: '16px 16px 8px 16px',
    fontSize: '22px',
    lineHeight: '24px',
    letterSpace: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 8px 32px',
  },
};

export const TitleTextWithPadding = {
  borderColor: '#0C0D0D',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  maxWidth: '1000px',
  '@media only screen and (max-width: 600px)': {
    padding: '16px 0px 0px 0px',
    fontSize: '22px',
    lineHeight: '24px',
    letterSpace: 0
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 8px 32px',
  },
};

// currently not being used
export const SectionTextWithFirstLetterBold = {
  padding: '16px 0px 0px 0px',
  textIndent: '40px',
  lineHeight: '32px',
  fontSize: '20px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  width: '850px',
  alignItems: 'center',
  ':: first-letter': {
    fontWeight: 'bold',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px 32px 0px 32px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    textIndent: '0px',
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

export const sectionText = {
  padding: '16px 0px 0px 0px',
  textIndent: '40px',
  lineHeight: '32px',
  fontSize: '20px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  width: '850px',
  alignItems: 'center',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 48px 0px 48px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    textIndent: '0px',
    // minWidth: `calc(100vw - ${'48px'})`,
    // maxWidth: `calc(100vw - ${'48px'})`,
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
  // padding: '16px 0px 0px 0px',
  // textIndent: '60px',
  lineHeight: '32px',
  fontSize: '20px',
  // fontWeight: 'bold',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  '@media only screen and (max-width: 600px)': {
    textIndent: '0px',
    // padding: '8px 0px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em',
    minWidth: `calc(100vw - ${'64px'})`,
    maxWidth: `calc(100vw - ${'64px'})`,
  },
  '@media only screen and (min-width: 600px)': {
    padding: '',
  },
};

export const quoteText = {
  borderColor: '#0C0D0D',
  padding: '16px 0px 0px 0px',
  lineHeight: '32px',
  fontSize: '26px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  maxWidth: '600px',
  fontStyle: 'itallic',
  '@media only screen and (max-width: 600px)': {
    padding: '16px 48px 16px 48px',
    fontSize: '17px',
    lineHeight: '28px',
    letterSpacing: '-0.003.em'
  },
  '@media only screen and (min-width: 600px)': {
    padding: '16px 32px 32px 32px',
  },
};

export const paragraphText = {
  padding: '16px 0px 0px 0px',
  // textIndent: '40px',
  lineHeight: '32px',
  fontSize: '20px',
  // fontFamily: 'source-serif-pro, Georgia, Cambria, \'Times New Roman\', Times, serif',
  width: '1000px',
  alignItems: 'center',
  ':: first-letter': {
    // fontWeight: 'bold',
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px 16px 8px 16px', // make padding smaller for the top
    fontSize: '17px',
    lineHeight: '28px',
    // textIndent: '0px',
    letterSpacing: '-0.003.em'
  },
  '@media only screen and (min-width: 600px)': {
    padding: '0px 32px 0px 32px',
  },
};

export default [
  BulletListChildLinkStyles,
  ImageGrid,
  CreateArticleImage,
  CreateArticleVideo,
  CreateArticleIndentImage,
  LinkStyles,
  ParagraphTitleRoot,
  titleText,
  sectionText,
  SectionTextWithFirstLetterBold,
  sectionTextParagraph,
  quoteText,
  paragraphText,
  TitleTextWithPadding,
];
