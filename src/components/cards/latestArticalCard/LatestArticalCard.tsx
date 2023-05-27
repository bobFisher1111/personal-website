import React from 'react';
import {
  Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Box,
} from '@mui/material/';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

const LatestArticalCard: React.FC<Props> = ({
    title,
    name,
    articalInfo,
    articalImage,
    section,
    date,
    turnOnStyle,
}) => {
  articalInfo = "Xenoblade Chronicles 3 is an action role-playing game with a large open world to explore, being the sixth title in the Xenoblade series. Unlike previous Xenoblade series entries, the game allows for seven party members to participate in battles at once, including the main party and an additional 'Hero' character.";
  return (
    <div
      style={{
        padding: '0px 0px 16px 0px',
      }}>
    <Card 
      sx={{
        minWidth: '345px',
        maxWidth: '345px', // 345,
        transition: 'transform .5s',
        '&::after': {
          posisition: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transition: 'opacity 2s cubic-bezier(.165, .84, .44, 1)',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          opacity: 0,
          zIndex: -1,
        },
        '&:hover, &:focus': {
          transform: 'scale3d(1.006, 1.006, 2)',
          '&::after': {
            opacity: 1,
          }
        },
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            color: 'white',
            // padding: '15px',
            // height: '24px',
            
          }}
        >
          <Typography 
            variant="h6" 
            color="white"
            sx={{
              textShadow: 'black 2px 2px 2px',
              padding: '16px',
            }}
          >
            {title}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          height="400px"
          image={articalImage}
        />
        <Box
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'black',
            color: 'white',
            // padding: '16px',
            opacity: 0.70,
            // height: '36px',
          }}
        >
          <Grid container>
            <Grid 
              item 
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
            >
              <Typography 
                variant="subtitle1" 
                color="white"
                sx={{ 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '1',
                  WebkitBoxOrient: 'vertical',
                  padding: '16px'
                }} 
              >
                by {name}
              </Typography>
            </Grid>
            <Grid 
              item 
              xs={2}
              sx={{
                padding: '16px'
              }}
            >
              <ContentCopyIcon />
            </Grid>
          </Grid>
        </Box>
      </Box>
</Card>
</div>
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
  turnOnStyle?: boolean;
};

export default LatestArticalCard;

