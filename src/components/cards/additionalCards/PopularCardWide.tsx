import React from 'react';
import { styled } from '@mui/material/styles';
import 
  { Button, CardActions, Typography, CardMedia, CardContent, Card, Grid,
} from '@mui/material/';

const CardContentNoPadding = styled(CardContent)(`
  padding: 8px 16px 0px 0px;
  &:last-child {
    padding-bottom: 0;
  }
`);

const PopularCardWide: React.FC<Props> = ({
    title,
    name,
    articalInfo,
    articalImage,
    section,
    date,
}) => {
  articalInfo = "Xenoblade Chronicles 3 is an action role-playing game with a large open world to explore, being the sixth title in the Xenoblade series. Unlike previous Xenoblade series entries, the game allows for seven party members to participate in battles at once, including the main party and an additional 'Hero' character.";
  return (
    <Card 
      sx={{ 
        display: 'flex',
        wordWrap: 'break-word',
        border: '1px solid #2F4C69',
        minHeight: '172px',
        maxHeight: '225px',
        backgroundColor: '#282c34',
      }}
    >
      <Grid 
        container
      >
        <Grid
          item
          sx={{
            padding: '20px 8px 0px 16px'
          }}
        >
          <Typography 
            variant='h5'
            sx={{
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              border: '1px solid #667A6E',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '15px',
              color: 'white',
              backgroundColor: '#282c34',
            }}
          >
            7
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={7}
          lg={7}
          xl={7}
          sx={{
            padding: '10px 0px 0px 0px',
            lineHeight: '1',
          }}
        >
          <CardContentNoPadding
            sx={{
              fontColor: 'white',
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
            <CardActions
              sx={{
                padding: '40px 0px 0px 0px',
              }}
            >
              <Button 
                size="small"
                variant="outlined"
                sx={{
                  color: '#667A6E',
                  borderColor: '#667A6E',
                  pointerEvent: 'none'
                }}
              >
                Share
              </Button>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: '#667A6E',
                  borderColor: '#667A6E',
                  pointerEvent: 'none'
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </CardContentNoPadding>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          sx={{
              maxWidth: '100%',
              maxHeight: '100%',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 400 }}
            image={articalImage}
            alt="artical picture"
          />
        </Grid>
      </Grid>
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

export default PopularCardWide;
