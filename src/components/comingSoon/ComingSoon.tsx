import React from 'react';
import { Typography } from '@mui/material';
import { comingSoonText } from './ComingSoonStyles';

const ComingSoon: React.FC = () => {
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
