import { Theme } from '@mui/material/styles';
import { SIZES } from 'src/store/redux/theme/CONSTANTS';

export const WritersGridRoot = () => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: SIZES.maxWidth.screenWidth,
  margin: 'auto',
  padding: '40px 24px 0px 24px',
});

export const WritersCardGrid = (theme: Theme) => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: SIZES.maxWidth.screenWidth,
  margin: 'auto',
  padding: '16px 24px 0px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 24px 0px 24px',
  },
});
