import { Typography } from '@mui/material';
import { comingSoonText } from './ComingSoonStyles';

const ComingSoon = () => {
  return (
    <Typography
      color="primary"
      variant="h5"
      sx={comingSoonText}
    >
      Coming Soon...
    </Typography>
  );
};

export default ComingSoon;
