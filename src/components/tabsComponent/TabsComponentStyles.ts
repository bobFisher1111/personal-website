export const GridTabsComponent = (turnonsectiontabspadding: boolean) => ({
  padding: turnonsectiontabspadding ? '16px 0px 16px 0px' : '0px 0px 16px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
});

export const TabComponentTextStyles = {
  textTransform: 'initial',
  fontSize: '18px',
  color: '#2F4C69',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    fontWeight: 'bold',
    '&.MuiButtonBase-root': {
      padding: '0px',
    },
  },
};

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
    backgroundColor: '#667A6E',
    border: '1px',
  },
  "& button[aria-selected='true']": {
    borderBottom: "3px solid #667A6E"
  },
  '@media only screen and (max-width: 600px)': {
    "& button[aria-selected='true']": {
      borderBottom: "1px solid #667A6E"
    },
  },
};
      
export default [
  GridTabsComponent,
  TabComponentTextStyles,
  TabPanelStyle,
  TabsChangeStyle,
];
    