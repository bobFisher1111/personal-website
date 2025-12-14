// src/styles/AppBarStyles.ts
import { Theme } from '@mui/material';
import { COLORS, SIZES } from '../../store/redux/theme/CONSTANTS';


export const AppBarStyles = (theme: Theme) => ({
  position: 'fixed',
  component: 'nav',
  boxShadow: 'none',
  borderBottom: `${SIZES.border} ${COLORS[theme.palette.mode].primary}`,
  height: SIZES.height.appBar,
  justifyContent: 'center',
});

export default [AppBarStyles];
