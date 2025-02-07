import {
  LIGHT_PRIMARY,
  DARK_PRIMARY,
} from '../../store/redux/theme/CONSTANTS';

export const cardStyles = (theme: boolean) => ({
  display: 'flex', 
  width: '1160px', 
  border: theme ? `2px solid ${DARK_PRIMARY}` : `2px solid ${LIGHT_PRIMARY}`, 
  boxShadow: 'none',
  padding: '32px',
  borderRadius: '8px',
  '@media only screen and (max-width: 600px)': {
    border: theme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
    width: 'calc(100vw - 32px)',
    height: '500px',
    padding: '16px',
    borderRadius: '4px',
  },
  // remove this or change if it doesn't work
  // '@media screen and (min-width: 601px) and (max-width: 1024px) and (orientation: landscape)': {
  //   height: '500px',
  // },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5)': {
    height: '500px',
  },
  '@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)':  {
    height: '500px',
  },
});

export const desktopArticleSubTitleStyles = {
  fontSize: '20px',
};

export const desktopArticleTitleStyles = {
  fontSize: '30px',
};

export const desktopCardContentStyles = {
  flex: '1 0 auto',
};

export const desktopCarouselPlayStyles = {
  display: 'flex',
  alignItems: 'center',
  pl: 1,
  pb: 1,
  padding: '16px',
};

export const desktopGridDateStyles = {
  alignContent: 'center',
};

export const desktopGridRootStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export const desktopGridRootAvatarDateStyles = {
  padding: '16px',
};

//
export const desktopImageStyles = (theme: boolean) => ({
  border: theme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
  borderRadius: '4px',
  height: '405px',
  // width: '200px',
  /* Media query for iPhone landscape mode */
  '@media only screen and (max-device-width: 932px) and (orientation: landscape)': {
    // height: '200px',
    maxWidth: '600px' // testing may need to change
  },
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
});

export const mobileArticleTitleStyles = {
  fontSize: '24px',
  padding: '0px 0px 8px 0px',
};

export const mobileCardSRootStyles = {
  height: '160px',
  '&.MuiCardContent-root': {
    padding: ' 16px 0px 16px 0px'
  },
};

export const mobileCarouselPlayStyles = {
  display: 'flex',
  alignItems: 'center',
  pl: 1,
  pb: 1,
  padding: '16px',
  justifyContent: 'center',
};

export const mobileGridRootStyles = {
  '@media only screen and (min-width: 601px)': {
    display: 'none'
  }
};

export const mobileGridRootAvatarDateStyles = {
  padding: '0px 0px 8px 0px'
};

export const mobileGridDateStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

export const mobileImageStyles = (theme: boolean) => ({
  borderRadius: '4px', 
  height: '215px',
  border: theme ? `1px solid ${DARK_PRIMARY}` : `px solid ${LIGHT_PRIMARY}`
});

export const mobileSubtitleStyles = {
  fontSize: '14px',
};
