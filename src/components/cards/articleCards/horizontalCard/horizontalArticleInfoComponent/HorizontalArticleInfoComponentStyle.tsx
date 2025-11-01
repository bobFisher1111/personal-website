import { Theme } from '@mui/material/styles';

export const chipNoPointer = (theme: Theme) => ({
  borderRadius: '4px',
  pointerEvents: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    height: '24px',
  },
});

export const chipStyle = (theme: Theme) => ({
  border: '1px solid #0C0D0D',
  color: '#0C0D0D',
  cursor: 'pointer',
  borderRadius: '4px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    height: '24px',
  },
});

export const iconWrapper = (theme: Theme) => ({
  fontSize: '20px',
  marginRight: '4px',
  lineHeight: '24px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
});

export const seriesPadding = () => ({
  padding: '0px 0px 0px 16px',
});

export const gridHorizontalInfo = (theme: Theme) => ({
  padding: '0px 4px 2px 4px',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '8px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 4px 2px 4px',
  },
});

export const authorNameText = (theme: Theme) => ({
  fontSize: '16px',
  paddingRight: '16px',
  lineHeight: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});
