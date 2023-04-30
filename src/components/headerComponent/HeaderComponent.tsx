import React from 'react';
import {
    Grid, Typography,
} from "@mui/material";

const HeaderComponent:  React.FC<Props> = ({
  title,
  backgroundColor,
  fontColor,
  lineHeight,
  fontSize,
}) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          // display: 'flex',
          // margin: 'auto', 
          backgroundColor: backgroundColor,
          // borderBottom: '2px solid red',
          // backgroundImage: 'radial-gradient(green 20%, transparent 20%), radial-gradient(green 20%, transparent 20%)',
          // backgroundPosition: '0 0, 10px 10px',
          // backgroundSize: '20px 20px',
          // marginLeft: '32px',
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
              color: fontColor, // '#667A6E', // white
              padding: '25px 0px 25px 0px',
              fontSize: fontSize,
              lineHeight: lineHeight,
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
  fontColor: string;
  lineHeight: string;
  fontSize: string;
};

export default HeaderComponent;
