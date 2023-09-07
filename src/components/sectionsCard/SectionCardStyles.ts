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
    
export default [
  ButtonSectionTtileStyle,
  CardActionsSectionNameStyle
]
