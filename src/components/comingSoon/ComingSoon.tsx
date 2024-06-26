import React from 'react';
import {
  Typography,
} from '@mui/material';
import {
  commingSoonText,
} from './ComingSoonStyles';
    
const ComingSoon: React.FC = () => {
  return (
    <Typography
      color="primary"
      variant="h5"
      sx={commingSoonText}
    >
      Coming Soon...
    </Typography>
  );
};

export default ComingSoon;
