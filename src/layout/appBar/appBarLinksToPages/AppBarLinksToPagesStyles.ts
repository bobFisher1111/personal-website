import { Theme } from '@mui/material/styles';
import { FONT_SIZES } from '../../../store/redux/theme/CONSTANTS';

export const TypographyLinkTwoPage = (theme: Theme) => ({
  cursor: 'pointer',
  fontSize: FONT_SIZES.sectionTitle,
  [theme.breakpoints.down('md')]: {
    fontSize: FONT_SIZES.body1,
  },
});

export default [
  TypographyLinkTwoPage,
];
