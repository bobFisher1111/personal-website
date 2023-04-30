import React from 'react';
import 
  { Typography, CardMedia, CardContent, Card, Grid,
} from '@mui/material/';
import book1 from '../../assets/images/book1.png';

/*
  - books
  - music
*/

const Works: React.FC<Props> = ({
  bookTitle,
  bookYear,
}) => {
  return (
    <>
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
      >
        <Typography
          variant="h6"
        >
          Author Book's
        </Typography>
      </Grid>
    </Grid>
    <Grid 
      container
    >
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        sx={{
            padding: '0px 65px 8px 0px',
            width:'55px'
          }}
      >
        <CardMedia
          component="img"
          image={book1}
          sx={{
            width: "55px",
            height: "85px", // 400
          }}
        />
      </Grid>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        sx={{
          padding: '0px 0px 0px 0px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  //'-webkit-font-smoothing': 'antialiased',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
          }}
        >
          {bookTitle}
        </Typography>
        <Typography>
          {bookYear}
        </Typography>
      </Grid>
      <Grid container>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        sx={{
            padding: '0px 65px 8px 0px',
            width:'55px'
          }}
      >
        <CardMedia
          component="img"
          image={book1}
          sx={{
            width: "55px",
            height: "85px", // 400
          }}
        />
      </Grid>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        sx={{
          padding: '0px 0px 0px 0px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  //'-webkit-font-smoothing': 'antialiased',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
          }}
        >
          {bookTitle}
        </Typography>
        <Typography>
          {bookYear}
        </Typography>
      </Grid>
    </Grid>
    </Grid>
  </>
  );
}

export type Props = {
  bookTitle?: string;
  bookYear?: string;
};

export default Works;
