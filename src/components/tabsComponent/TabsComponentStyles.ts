import { Theme } from '@mui/material';
import { FONT_SIZES } from '../../store/redux/theme/CONSTANTS';

export const GridTabsComponent = (theme: Theme, turnonsectiontabspadding: boolean) => ({
  padding: turnonsectiontabspadding ? '16px 0px 16px 0px' : '0px 0px 16px 0px',

  [theme.breakpoints.down('sm')]: {
    padding: '0px',
  },
});

export const TabComponentTextStyles = (theme: Theme, darkTheme: boolean) => ({
  textTransform: 'initial',
  fontSize: FONT_SIZES.sectionTitle,
  color: darkTheme ? '#9DB2BF' : '#0C0D0D',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    fontWeight: 'bold',
    '&.MuiButtonBase-root': {
      padding: '0px',
    },
  },
});

export const TabPanelStyle = {
  p: 3,
};

export const TabsChangeStyle = (theme: Theme) => ({
  width: '100%',
  '& .MuiBox-root': {
    padding: '0px',
  },
  '& .MuiTabs-flexContainer': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiTabs-indicator': {
    border: '1px',
  },
  "& button[aria-selected='true']": {
    borderBottom: '3px solid #0C0D0D',
  },

  [theme.breakpoints.down('sm')]: {
    // Reserved for future mobile-specific overrides
  },
});
