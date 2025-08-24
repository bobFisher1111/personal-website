import { Theme } from '@mui/material/styles';

export const WritersCardGridRoot = () => ({
  padding: '8px 16px 16px 16px',
});

export const WritersCardAvatar = (theme: Theme) => ({
  width: '140px',
  height: '140px',
  borderRadius: '4px',
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

export const WritersCardGridAuthorName = (theme: Theme) => ({
  paddingTop: '4px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 0px 0px 16px',
  },
});

export const WritersCardTextAuthorName = (theme: Theme) => ({
  fontSize: '20px',
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
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});
