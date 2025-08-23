import { Theme } from '@mui/material';

export const CardMediaVerticalCardImage = (theme: Theme) => ({
  [theme.breakpoints.up('sm')]: {
    height: '200px',
  },
  [theme.breakpoints.down('sm')]: {
    '&.MuiCardMedia-root': {
      maxHeight: '50px',
    },
  },
});

export const CardRootStyle = {
  position: 'relative',
};

export const CardFooterStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: '#0C0D0D',
  opacity: 0.8,
};

export const CardVerticalCard = (theme: Theme, darkTheme: boolean) => ({
  border: darkTheme ? '1px solid #9DB2BF' : '#0C0D0D',
  width: '276px',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'calc(100vw - 32px)',
    maxWidth: 'calc(100vw - 32px)',
  },
});

export const DivVerticalArticleRoot = (theme: Theme) => ({
  padding: theme.spacing(1, 1, 1, 0),
});

export const GridPadding = (theme: Theme) => ({
  padding: theme.spacing(2),
});

export const TypographyVerticalCardNameStyle = (theme: Theme) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(2),
});

export const TypographyVerticalCardNameStyleHover = (theme: Theme, darkTheme: boolean) => ({
  color: darkTheme ? '#9DB2BF' : 'white',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  padding: theme.spacing(2),
  fontWeight: 900,
  textShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});
