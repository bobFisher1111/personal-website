import { Theme } from '@mui/material';
import { SIZES } from 'src/store/redux/theme/CONSTANTS';

export const SectionComponentGridRoot = (theme: Theme) => ({
  display: 'flex',
  maxWidth: SIZES.maxWidth.screenWidth,
  margin: 'auto',
  padding: '36px 16px 0px 16px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '24px 12px 0px 12px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '16px 8px 0px 8px',
  },
});

export const SectionComponentGridTabs = (theme: Theme) => ({
  padding: '0px 0px 200px 0px',

  [theme.breakpoints.down('md')]: {
    paddingBottom: '120px',
  },

  [theme.breakpoints.down('sm')]: {
    paddingBottom: '80px',
  },
});
