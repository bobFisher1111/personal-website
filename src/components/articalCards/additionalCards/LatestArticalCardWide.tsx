import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardContentNoPadding = styled(CardContent)(`
  padding: 8px 16px 0px 0px;
  &:last-child {
    padding-bottom: 0;
  }
`);

const LatestArticalCardWide: React.FC<Props> = ({
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
        backgroundColor: '#2F4C69',
      }}
    >
      <Grid 
        container
      >
        <Grid
          item
          xs={7.5}
          sm={7.5}
          md={7.5}
          lg={7.5}
          xl={7.5}
          sx={{
              lineHeight: '1',
              padding: '10px 16px 0px 16px',
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
          </CardContentNoPadding>
          <CardActions
            sx={{
              padding: '40px 0px 0px 0px',
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

export default LatestArticalCardWide;
