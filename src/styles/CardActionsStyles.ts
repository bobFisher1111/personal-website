import {
  styled,
  CardActions
} from "@mui/material";
      
export const CardActionsSectionName= styled(CardActions) ({
  backgroundColor: '#282c34', 
  justifyContent: 'center',
  '@media only screen and (max-width: 600px)': {
    height: '66px',
    backgroundColor: 'white',
    padding: '0px',
  },
});
      
export default [
  CardActionsSectionName,
];
    