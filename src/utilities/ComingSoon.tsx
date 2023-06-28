import {
  Typography,
} from "@mui/material";
    
const ComingSoon: React.FC<Props> = () => {
  return (
    <Typography
      variant="h5"
      sx={{
        padding: '16px',
        color: '#2F4C69',
      }}
    >
      Coming Soon...
    </Typography>
  )
};

export type Props = {};

export default ComingSoon;
      