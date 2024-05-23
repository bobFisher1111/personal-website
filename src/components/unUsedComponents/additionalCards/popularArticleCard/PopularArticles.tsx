import React from 'react';
import {
  Typography, Button, CardActions, CardMedia, CardContent, Card, Grid, Box,
} from '@mui/material/';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const PopularArticles: React.FC<Props> = ({
    title,
    name,
    articalInfo,
    articalImage,
}) => {
  articalInfo = "Xenoblade Chronicles 3 is an action role-playing game with a large open world to explore, being the sixth title in the Xenoblade series. Unlike previous Xenoblade series entries, the game allows for seven party members to participate in battles at once, including the main party and an additional 'Hero' character.";
  return (
    <Card sx={{ 
      maxWidth: 345,
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
      }
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="400" // 400
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
            // backgroundColor: '#282c34',
          }}
        >
          1
        </Typography>
        <Typography 
            variant="h6" 
            color="white"
            sx={{
              position: 'absolute',
              top: '8px',
              left: '41px',
              height: '25px',
              width: '275px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              textAlign: 'left',
              alignItems: 'center',
              color: 'white',
              textShadow: '#0C0D0D 2px 2px 2px',
            }}
          >
            {title}
         </Typography>
         <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: '#0C0D0D',
            color: 'white',
            padding: '16px',
            opacity: 0.70,
          }}
        >
          <Grid container>
            <Grid item xs={10}>
              <Typography 
                variant="subtitle1" 
                color="white"
                sx={{ 
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '1',
                  WebkitBoxOrient: 'vertical',
                }} 
              >
                by {name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ContentCopyIcon />
            </Grid>
          </Grid>
        </Box>

      </Box>
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

export default PopularArticles;
