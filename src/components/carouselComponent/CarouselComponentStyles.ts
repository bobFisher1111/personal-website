import {
  COLORS,
} from 'src/store/redux/theme/CONSTANTS';

export const cardStyles = (theme: boolean) => ({
  display: 'flex', 
  width: '1160px', 
  border: theme ? `2px solid ${COLORS.dark.primary}` : `2px solid ${COLORS.light.primary}`, 
  boxShadow: 'none',
  padding: '32px',
  borderRadius: '8px',
  '@media only screen and (max-width: 600px)': {
    border: theme ? `1px solid ${COLORS.dark.primary}` : `1px solid ${COLORS.light.primary}`,
    width: 'calc(100vw - 32px)',
    height: '500px',
    padding: '16px',
    borderRadius: '4px',
  },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5)': {
    height: '500px',
  },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    height: '400px',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    height: '346px',
  },
});

export const controlsStyles = {
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    height: '20px',
  },
};

export const desktopArticleSubTitleStyles = {
  fontSize: '20px',
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  }
};

export const desktopArticleTitleStyles = {
  fontSize: '30px',
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  }
};

export const desktopCardContentStyles = {
  flex: '1 0 auto',
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    height: '50px',
  }
};

export const desktopCarouselPlayStyles = {
  display: 'flex',
  alignItems: 'center',
  pl: 1,
  pb: 1,
  padding: '16px',
};

export const desktopDateStyles = {
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '12px'
  }
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
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    width: '300px',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    height: '281px',
  }
};

export const desktopGridRootAvatarDateStyles = {
  padding: '16px',
};

export const desktopImageStyles = (theme: boolean) => ({
  border: theme ? `1px solid ${COLORS.dark.primary}` : `1px solid ${COLORS.light.primary}`,
  borderRadius: '4px',
  height: '405px',
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5)': {
    width: '700px'
  },
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)':  {
    height: '338px',
    maxWidth: '620px',
    minWidth: '600px',
    widht: '100%',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    width: '500px',
    height: '281px',
  }
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
  border: theme ? `1px solid ${COLORS.dark.primary}` : `1px solid ${COLORS.light.primary}`
});

export const mobileSubtitleStyles = {
  fontSize: '14px',
};
