import {
  styled,
  Button,
} from "@mui/material";

// SectionCard
export const ButtonSectionTtile = styled(Button) ({
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
});
    
export default [
  ButtonSectionTtile,
]
  