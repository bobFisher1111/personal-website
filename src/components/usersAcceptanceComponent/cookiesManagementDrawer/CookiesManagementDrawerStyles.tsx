export const DrawerStyles = {
  "& .MuiDrawer-paper": {
    position: 'relative',
    width: '600px',
    transition: "none !important",
    height: '840px',
    justifContent: 'center',
    borderRadius: '20px',
    border: '1px solid black',
    display: 'flex',
    top: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@media only screen and (max-width: 600px)': {
    "& .MuiDrawer-paper": {
      position: 'relative',
      width: '600px',
      minWidth: '100%',
      maxWidth: '100%',
      transition: "none !important",
      height: '100%',
      justifContent: 'center',
      borderRadius: '20px',
      border: '1px solid black',
      display: 'flex',
      top: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

export const SettingTitleStyles = {
  textTransform: 'none',   
};
