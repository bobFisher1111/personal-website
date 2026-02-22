import { Theme } from '@mui/material/styles';
import { FONT_SIZES, SIZES } from 'src/store/redux/theme/CONSTANTS';

export const authorComponentGridRoot = () => ({
  display: 'flex',
  paddingBottom: '200px',
  maxWidth: SIZES.maxWidth.appBar,
  margin: 'auto',
  padding: '76px 16px 100px 16px',
});

export const authorComponentGridBiography = () => ({
  padding: '8px 16px 16px 16px',
});

export const authorComponentGridBiographyTitle = (theme: Theme) => ({
  textAlign: 'flex-start',
  fontSize: FONT_SIZES.sectionTitle,
  padding: '16px 0px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
});

export const authorComponentGridBiographyText = (theme: Theme) => ({
  textAlign: 'flex-start',
  fontSize: FONT_SIZES.body1,
  textIndent: '15px',
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT_SIZES.body1,
  },
});

export const gridWidth = () => ({
  width: '100%',
})
