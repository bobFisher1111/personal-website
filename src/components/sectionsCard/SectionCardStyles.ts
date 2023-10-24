export const ButtonSectionTtileStyle = {
  color: 'white',
  textTransform: 'initial',
  fontSize: '16px',
  "&:hover": {
    color: "#667A6E",
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    color: '#2F4C69',
    fontWeight: 'bold',
  },
};

export const CardActionsSectionNameStyle= {
  backgroundColor: '#282c34', 
  justifyContent: 'center',
  '@media only screen and (max-width: 600px)': {
    height: '66px',
    backgroundColor: 'white',
    padding: '0px',
  },
};

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

export const GridOverflowHeader = {
  wordBreak: 'break-word',
  overflow: 'hidden',
};

export const GridSectionCardRoot = {
  padding: '16px 0px 16px 0px',
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
]
