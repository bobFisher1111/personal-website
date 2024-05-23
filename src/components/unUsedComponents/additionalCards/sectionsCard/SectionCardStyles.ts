export const ButtonSectionTtileStyle = {
  // color: 'black',
  textTransform: 'initial',
  fontSize: '16px',
  // '&:hover': {
  //   color: '#667A6E',
  // },
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    // color: '#667A6E',
    fontWeight: 'bold',
  },
};
// Later for dark and light theme
// export const ButtonSectionTtileStyle = (homepage: boolean) => ({
//   color: homepage ? '#2F4C69' :'white',
//   textTransform: 'initial',
//   fontSize: '16px',
//   '&:hover': {
//     color: '#667A6E',
//   },
//   '@media only screen and (max-width: 600px)': {
//     fontSize: '14px',
//     color: '#0C0D0D',
//     fontWeight: 'bold',
//   },
// });

export const CardActionsSectionNameStyle= {
  // backgroundColor: '#282c34', 
  // border: '1px solid red',
  border: '2px solid #282c34',
  justifyContent: 'center',
  '@media only screen and (max-width: 600px)': {
    height: '66px',
    // backgroundColor: 'white',
    padding: '0px',
    border: '0px'
  },
};

// later for dark and light theme
// export const CardActionsSectionNameStyle = (homepage: boolean) => ({
//   backgroundColor: homepage ? 'white' : '#282c34', 
//   justifyContent: 'center',
//   border: homepage ? '1px solid #667A6E' : 'none',
//   '@media only screen and (max-width: 600px)': {
//     height: '66px',
//     backgroundColor: 'white',
//     padding: '0px',
//     border: 'none',
//   },
// });

export const CardMediaSection = {
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
  '@media only screen and (min-width: 600px)': {
    height: '86px',
  },
  '@media only screen and (min-width: 992px)': {
    height: '212.5px',
  },
};

export const CardSectionCard = {
  '@media only screen and (max-width: 600px)': {
    boxShadow: 0
  },
};
// Later update for dark and light theme
// export const CardSectionCard = {
//   '&.MuiCard-root': {
//     borderRadius: '0px',
//   },
//   '@media only screen and (max-width: 600px)': {
//     boxShadow: 0
//   },
// };

export const GridOverflowHeader = {
  wordBreak: 'break-word',
  overflow: 'hidden',
};

export const GridSectionCardRoot = {
  padding: '16px 0px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
};
    
export default [
  ButtonSectionTtileStyle,
  CardActionsSectionNameStyle,
  CardMediaSection,
  CardSectionCard,
  GridOverflowHeader,
  GridSectionCardRoot,
];
