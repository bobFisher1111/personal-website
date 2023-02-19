import React from 'react';
import {
    Grid, Typography,
} from "@mui/material";

const HeaderComponent:  React.FC<Props> = ({
  title,
  backgroundColor,
}) => {
  return (
    <>
      <Grid
        container
        direction="row"
        sx={{ 
          display: 'flex',
          margin: 'auto', 
          backgroundColor: backgroundColor,
          borderBottom: '2px solid red',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            padding: '50px 0px 0px 0px'
          }}
        >
          <Typography
            variant="h5"
            style={{
              textAlign: 'center',
              color: 'white',
              padding: '25px 0px 75px 0px',
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export type Props = {
  title?: string;
  backgroundColor: string;
  };

export default HeaderComponent;
