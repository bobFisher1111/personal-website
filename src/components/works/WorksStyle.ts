export const WorksGridRootTitle = {
    padding: '32px 0px 16px 16px',
};

export const WorksTitle = {
    fontSize: '20px',
    '@media only screen and (max-width: 600px)': {
      fontSize: '20px',
    },
};

export const WorksGridRoot = {
    padding: '0px 24px' ,
    '@media only screen and (max-width: 600px)': {
      padding: '8px',
    },
};
  
export const WorksGridCover = {
    padding: '0px 160px 36px 0px',
    width: '100px',
    '@media only screen and (max-width: 600px)': {
      padding: '0px 80px 8px 8px',
    },
};

export const WorksCoverImage = {
  width: '148px',
  height: '235px',
  '@media only screen and (max-width: 600px)': {
    width: '148px',
    height: '235px',
  },
};
export const WorksGridInfo = {
  padding: '0px 0px 0px 8px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 0px 16px',
  },
};

export const WorksInfoTitle = {
    fontSize: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    '@media only screen and (max-width: 600px)': {
      fontSize: '18px',
    },
};

export const WorksInfoSubTitle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
  },
};

export default [
  WorksGridRootTitle,
  WorksTitle,
  WorksGridRoot,
  WorksCoverImage,
  WorksGridCover,
  WorksGridInfo,
  WorksInfoTitle,
  WorksInfoSubTitle,
];
