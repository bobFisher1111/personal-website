import React from 'react';
import {
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import solidSnakePortrait2 from '../../assets/images/solidSnakePortrait2.jpeg';

const HeaderComponent:  React.FC<Props> = ({
  title,
  backgroundColor,
  fontColor,
  lineHeight,
  fontSize,
  authorAvatar,
}) => {
  const titleFunction = (item: any) => {
    return (
      <Typography
            variant="h5"
            style={{
              textAlign: 'center',
              color: fontColor,
              padding: '25px 0px 25px 0px',
              fontSize: fontSize,
              lineHeight: lineHeight,
            }}
          >
            {item}
          </Typography>
    )
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          backgroundColor: backgroundColor,
          padding: '50px 0px 0px 0px',
        }}
      >
        {authorAvatar ? 
        <>
          <Grid
          item
          sx={{
            padding: '16px 0px 16px 16px'
          }}
        >
           <Avatar 
             alt="Remy Sharp"
             src={solidSnakePortrait2}
             sx={{
              width: 56,
              height: 56,
             }}
          />
      </Grid>
      <Grid
        item
        sx={{
          alignItems: 'center',
          padding: '16px',
        }}
      >
       {titleFunction(title)}
     </Grid>
     </>
      :
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
         {titleFunction(title)}
        </Grid>
      }
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
  authorAvatar: boolean;
};

export default HeaderComponent;