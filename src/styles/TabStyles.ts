import {
  styled,
  Tab
} from "@mui/material";

// TabsComponent
export const TabComponentText = styled(Tab) ({
  textTransform: 'initial',
  fontSize: '18px',
  color: '#2F4C69',
  '@media only screen and (max-width: 600px)': {
    fontSize: '12px',
    fontWeight: 'bold',
  },
});
      
export default [
    TabComponentText,
];
    