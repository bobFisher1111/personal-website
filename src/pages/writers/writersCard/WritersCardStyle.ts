import { Theme } from '@mui/material/styles';
import { FONT_SIZES, COLORS } from 'src/store/redux/theme/CONSTANTS';

export const WritersCardGridRoot = () => ({
  padding: '8px 16px 16px 16px',
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
});

export const WritersCardAvatar = (theme: Theme, darkTheme: boolean) => ({
  width: '140px',
  height: '140px',
  borderRadius: '4px',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  [theme.breakpoints.down('sm')]: {
    width: '80px',
    height: '110px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '100px',
    height: '140px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '140px',
    height: '140px',
  },
});

export const WritersCardTextAuthorName = (theme: Theme) => ({
  fontSize: FONT_SIZES.body1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
});

export const WritersCardTextAuthorTitle = (theme: Theme) => ({
  fontSize: FONT_SIZES.body1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});
