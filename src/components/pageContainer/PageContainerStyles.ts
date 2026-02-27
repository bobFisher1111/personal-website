import type { Theme } from '@mui/material';
import { SIZES } from 'src/store/redux/theme/CONSTANTS';

export const PageContainerRootStyles = (_theme: Theme) => ({
  display: 'flex',
  maxWidth: SIZES.maxWidth.screenWidth,
  margin: 'auto',
  padding: '76px 16px 100px 16px',
});
