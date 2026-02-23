import { Theme } from '@mui/material/styles';
import { SIZES } from 'src/store/redux/theme/CONSTANTS';

export const WritersCardGrid = (theme: Theme) => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: SIZES.maxWidth.screenWidth,
  margin: 'auto',
  padding: '70px 24px 0px 24px',
});
