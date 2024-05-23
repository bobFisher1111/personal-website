export const ArtPageBookExtraInfoGridRoot = (bottomheight: string) => {
  return {
    padding: `${bottomheight} 0px 0px 0px`,
  };
};

export const ArtPageBookExtraInfoLinkBuy = {
  fontsize: '16px',
  // fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },     
};

export const ArtPageBookExtraInfoText = {
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const WorksGridRootTitle = (authorspage: boolean | undefined) => {
  return {
    padding: authorspage ? '32px 0px 16px 16px' : '0px',
  };
};

export const WorksTitle = (authorsPage: boolean | undefined) => {
  return {
    fontSize: '20px',
    padding: authorsPage ? '' : '16px',
    '@media only screen and (max-width: 600px)': {
      fontSize: '20px',
    },
  };
};

export const WorksGridRoot = (authorsPage: boolean | undefined) => {
  return {
    padding: authorsPage ? '0px 24px' : '0px 0px 8px 24px',
    '@media only screen and (max-width: 600px)': {
      padding: '8px',
    },
  };
};
  
export const WorksGridCover = (authorsPage: boolean | undefined) => {
  return {
    padding: authorsPage ? '0px 160px 36px 0px' : '0px 65px 8px 0px',
    width: '100px',
    '@media only screen and (max-width: 600px)': {
      padding: '0px 80px 8px 8px',
    },
  };
};

export const WorksCoverImage = (authorsPage: boolean | undefined) => {
  return {
    width: authorsPage ? '148px' : '55px',
    height: authorsPage ? '235px' : '85px',
    '@media only screen and (max-width: 600px)': {
      width: '148px',
      height: '235px',
    },
  };
};

export const WorksGridInfo = {
  padding: '0px 0px 0px 8px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px 0px 0px 16px',
  },
};

export const WorksInfoTitle = (aboutWorks: boolean | undefined) => {
  return {
    fontSize: aboutWorks ? '20px' : '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    '@media only screen and (max-width: 600px)': {
      fontSize: '18px',
    },
  };
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

export const WorksInfoDate = (authorsPage: boolean | undefined) => {
  return {
    padding: authorsPage ? '0px' : '22px 0px 0px 0px',
  };
};

export default [
  ArtPageBookExtraInfoGridRoot,
  ArtPageBookExtraInfoLinkBuy,
  ArtPageBookExtraInfoText,
  WorksGridRootTitle,
  WorksTitle,
  WorksGridRoot,
  WorksCoverImage,
  WorksGridCover,
  WorksGridInfo,
  WorksInfoTitle,
  WorksInfoSubTitle,
  WorksInfoDate,
];
