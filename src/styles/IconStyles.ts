import {
  styled,
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
        
type props = {
  prop: string,
  padding?: string,
};
  
export const ContentCopyIconStyle = styled(ContentCopyIcon)<props>(({ prop, padding }) => ({
  color: prop,
  padding: padding,
  cursor: "pointer",
  "&:hover": {
    color: "#2F4C69",
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
    padding: '2px 0px 0px 16px',
  },
}));

export const EmailOutlinedIconStyles = styled(EmailOutlinedIcon)<props>(({ prop }) => ({
  cursor: 'pointer',
  color: prop,
  "&:hover": {
    color: "#2F4C69",
  },
  '@media only screen and (max-width: 600px)': {
      height: '20px',
      width: '20px',
    },
}));
        
export default [
    ContentCopyIconStyle,
    EmailOutlinedIconStyles,
];
  