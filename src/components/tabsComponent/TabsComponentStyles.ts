export const GridTabsComponent = (turnonsectiontabspadding: boolean) => ({
  padding: turnonsectiontabspadding ? '16px 0px 16px 0px' : '0px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
});

export const TabComponentTextStyles = (theme: boolean) => ({
  textTransform: 'initial',
  fontSize: '18px',
  color: theme ? '#9DB2BF' : '#0C0D0D',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px',
    fontWeight: 'bold',
    '&.MuiButtonBase-root': {
      padding: '0px',
    },
  },
});

export const TabPanelStyle = {
  p: 3
};

export const TabsChangeStyle = {
  width: '100%',
  '& .MuiBox-root': {
    padding: '0px 0px 0px 0px',
  },
  '& .MuiTabs-flexContainer': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiTabs-indicator': {
    border: '1px',
  },
  // eslint-disable-next-line
  "& button[aria-selected='true']": {
    borderBottom: '3px solid #0C0D0D'
  },
  '@media only screen and (max-width: 600px)': {
    // eslint-disable-next-line
    "& button[aria-selected='true']": {
    },
  },
};
      
export default [
  GridTabsComponent,
  TabComponentTextStyles,
  TabPanelStyle,
  TabsChangeStyle,
];
    