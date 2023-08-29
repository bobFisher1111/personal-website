import {
  Typography,
} from "@mui/material";
import {
  commingSoonText,
} from './ComingSoonStyles';
    
const ComingSoon: React.FC<Props> = () => {
  return (
    <Typography
      variant="h5"
      sx={commingSoonText}
    >
      Coming Soon...
    </Typography>
  )
};

export type Props = {};

export default ComingSoon;
