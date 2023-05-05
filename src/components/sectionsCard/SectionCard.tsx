import React from 'react';
import {
  Button, CardActions, CardMedia, Card, Grid, Box,
} from '@mui/material/';

const SectionCardXSmallSmall: React.FC<Props> = ({
  imgCover,
  section,
  backGroundColor, 
}) => {
  return (
      <Grid 
        container 
        sx={{
          padding: '0px 0px 16px 0px',
          // display:{
          //   xs: "flex",
          //   sm: "flex",
          //   md: "flex",
          //   lg: "flex",
          //   xl: "flex",
          //   // minWidth: "220px",
          //   // maxWidth: "220px",
          // },
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
              wordBreak: 'break-word',
              overflow: 'hidden',
              padding: 0,
              lineHeight: '1'
          }}
        >
          <Card>
            <CardMedia
              component="img"
              alt="section image"
              width="200"
              height="212.5"
              image={imgCover}
              // sx={{
              //   width: '200px',
              //   height: '112.5px',
              // }}
            />
            <CardActions sx={{ backgroundColor: '#282c34', justifyContent: 'center'}}>
              <Button size="small" sx={{ color: 'white'}}>{section}</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
  );
}

export type Props = {
  imgCover: string,
  section: string,
  backGroundColor: string, 
};

export default SectionCardXSmallSmall;
