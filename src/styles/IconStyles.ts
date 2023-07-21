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
}));

export const EmailOutlinedIconStyles = styled(EmailOutlinedIcon)<props>(({ prop }) => ({

  cursor: 'pointer',
  color: prop,
  "&:hover": {
    color: "#2F4C69",
  },
}));
        
export default [
    ContentCopyIconStyle,
    EmailOutlinedIconStyles,
];
  