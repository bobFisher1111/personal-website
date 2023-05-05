import React from 'react';
import {
  Grid, Typography,
} from "@mui/material";

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
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          maxWidth: "1024px",
          margin: 'auto',
          padding: '0px 8px 0px 8px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: 'fled-start',
            color: fontColor,
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
