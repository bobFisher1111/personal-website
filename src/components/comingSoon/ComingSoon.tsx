import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { comingSoonText } from './ComingSoonStyles';

const ComingSoon: React.FC = () => {
  const theme = useTheme();

  return (
    <Typography
      color="primary"
      variant="h5"
      sx={comingSoonText(theme)}
    >
      Coming Soon...
    </Typography>
  );
};

export default ComingSoon;
