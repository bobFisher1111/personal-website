import React from 'react';
import {
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid2';

const SubTitlesComponent: React.FC<Props> = ({
  subtitle,
  fontColor,
  turnOnStyle,
}) => {
  return (
    <Grid
      container
    >
      <Grid
        size={12}
        sx={{
          maxWidth: "1024px",
          margin: 'auto',
          padding: '0px 8px 0px 8px',
        }}
      >
        <Typography
          color="primary"
          variant="h6"
          sx={{
            textAlign: 'fled-start',
            padding: turnOnStyle ? '16px 0px 0px 0px' : '0px'
          }}
        >
          {subtitle} 
        </Typography>
      </Grid>
    </Grid>
  );
}

export type Props = {
  subtitle: string;
  fontColor: string;
  turnOnStyle?: boolean
};

export default SubTitlesComponent;
