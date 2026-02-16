import { COLORS } from "src/store/redux/theme/CONSTANTS";

export const DisclaimerTitleStyles = (theme: boolean) => ({
  textDecoration: 'underline',
  color: theme ? COLORS.dark.primary : COLORS.light.accent.green2,
});

export const DrawerStyles = {
  "& .MuiDrawer-paper": {
    position: 'relative',
    width: 700,
    transition: "none !important",
    height: 840,
    justifContent: 'center',
    borderRadius: '20px',
    border: '1px solid #0C0D0D',
    display: 'flex',
    top: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@media only screen and (max-width: 600px)': {
    "& .MuiDrawer-paper": {
      position: 'relative',
      width: 'calc(100vw)',
      minWidth: '100%',
      maxWidth: '100%',
      transition: "none !important",
      height: '100%',
      justifContent: 'center',
      borderRadius: '20px',
      border: '1px solid #0C0D0D',
      display: 'flex',
      top: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    "& .MuiDrawer-paper": {
      height: '350px'
    }
  },
  '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5)': {
    "& .MuiDrawer-paper": {
      height: '700px'
    },
  },
};
