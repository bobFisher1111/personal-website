import React from 'react';
import {
  Typography, Button, CardActions, CardMedia, CardContent, Card, Grid,
} from '@mui/material/';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

const PopularArticals: React.FC<Props> = ({
    title,
    name,
    articalInfo,
    articalImage,
    section,
    date,
}) => {
  articalInfo = "Xenoblade Chronicles 3 is an action role-playing game with a large open world to explore, being the sixth title in the Xenoblade series. Unlike previous Xenoblade series entries, the game allows for seven party members to participate in battles at once, including the main party and an additional 'Hero' character.";
  return (
    <Card sx={{ 
      maxWidth: 500,
      backgroundColor: '#282c34',
      }}
    >
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={articalImage}
        />
        <Typography
          variant='h5'
          sx={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            height: '25px',
            width: '25px',
            borderRadius: '50%',
            border: '1px solid #667A6E',
            textAlign: 'center',
            alignItems: 'center',
            fontSize: '17px',
            color: 'white',
            backgroundColor: '#282c34',
          }}
        >
          1
        </Typography>
      </div>
      <CardContent
        sx={{
          padding: '10px 16px 0px 16px',
        }}
      >
        <Typography component="div" noWrap variant="h6" color="white">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="#667A6E" component="div">
          by {name}
        </Typography>
        <Typography 
          variant="body1"
          color="white" 
          sx={{ 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }} 
          component="div"
        >
          {articalInfo}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: '16px',
        }}
      >
        <Grid 
          container 
          alignItems="center"
          sx={{
            whiteSpace: 'nowrap'
          }}
        >
          <Grid 
            item
            xs={3}
          >
            <Button 
              size="small"
              variant="outlined"
              sx={{
                color: '#667A6E',
                borderColor: '#667A6E',
                pointerEvent: 'none',
              }}
            >
              Share
            </Button>
          </Grid>
          <Grid 
            item
            xs={6}
          >
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: '#667A6E',
                borderColor: '#667A6E',
                pointerEvent: 'none',
                paddingLeft: '8px'
              }}
            >
              Learn More
            </Button>
          </Grid>
          <Grid 
            item
            xs={3}
            sx={{
              paddingLeft: '16px',
            }}
          >
            <ThumbUpRoundedIcon
              sx={{
                color: '#FDDA0D',
              }}
            />
            <ThumbDownRoundedIcon
              sx={{
                padding: '0px 0px 0px 8px',
                color: '#FDDA0D'
              }}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export type Props = {
  title?: string;
  name?: string;
  articalInfo?: string;
  articalImage?: string;
  section?: string;
  date?: string;
  articalId?: string;
};

export default PopularArticals;
