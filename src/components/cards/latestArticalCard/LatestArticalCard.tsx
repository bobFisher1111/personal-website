import React from 'react';
import {
  Typography, Card, CardContent, CardMedia, CardActions, Button,
} from '@mui/material/';

const LatestArticalCard: React.FC<Props> = ({
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
      backgroundColor: '#2F4C69',
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={articalImage}
      />
      <CardContent
        sx={{
          padding: '10px 16px 0px 16px',
        }}
      >
        <Typography component="div" noWrap variant="h6" color="white">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="#ddb4f0" component="div">
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
        <Button 
          size="small"
          variant="outlined"
          sx={{
            color: '#ddb4f0',
            borderColor: '#ddb4f0',
            pointerEvent: 'none'
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          variant="outlined"
          sx={{
            color: '#ddb4f0',
            borderColor: '#ddb4f0',
            pointerEvent: 'none'
          }}
        >
          Learn More
        </Button>
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

export default LatestArticalCard;
