import { Theme } from '@mui/material/styles';

// export const AlignLinkTexts = (paddingleft: boolean) => ({
//   display: 'flex',
//   alignContent: 'center',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: paddingleft ? '16px 16px 0px 16px' : '16px 0px 0px 0px',
//   '&.MuiGrid-item': {
//     paddingLeft: '0px',
//   },
// });

// export const GridPointer = () => ({
//   display: 'flex',
//   cursor: 'pointer',
//   padding: '16px 0px 0px 0px',
// });

export const TypographyLinkTwoPage = (theme: Theme) => ({
  cursor: 'pointer',
  fontSize: '26px',
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
  },
});


export default [
  // AlignLinkTexts,
  // GridPointer,
  TypographyLinkTwoPage,
];
