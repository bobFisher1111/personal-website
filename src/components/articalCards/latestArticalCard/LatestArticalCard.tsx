import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import foxGirl from '../../assets/images/foxGirl.png';

const CardContentNoPadding = styled(CardContent)(`
  padding: 8px 16px 0px 0px;
  &:last-child {
    padding-bottom: 0;
  }
`);

const LatestArticalXSSmall: React.FC<Props> = ({
    title,
    name,
    articalInfo,
    articalImage,
    section,
    date,
}) => {
  articalInfo = "Xenoblade Chronicles 3 is an action role-playing game with a large open world to explore, being the sixth title in the Xenoblade series. Unlike previous Xenoblade series entries, the game allows for seven party members to participate in battles at once, including the main party and an additional 'Hero' character.";
  const theme = useTheme();
  const contactDescription = "";
  return (
    <Card sx={{ 
      maxWidth: 500,
      backgroundColor: '#2F4C69',
      }}>
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
              //height: '100px',
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

export default LatestArticalXSSmall;

/*
<Card 
      sx={{ 
        display: 'flex',
        //backgroundColor: '#fff', // #282c34', #DBDBE9
        wordWrap: 'break-word',
        // border: '2px solid #2F4C69',
        // boxShadow: 'none',
        border: '1px solid #2F4C69',
        minHeight: '172px',
        maxHeight: '225px',
        // padding: '8px',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
        backgroundColor: '#2F4C69',
      }}
    >
    <Grid 
      container
      sx={{
        // padding: '0px 0px 16px 0px'
      }}
    >
       <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        sx={{
            // width:'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            // margin: 'auto',
            //position: 'absolute',
            // alignItems: 'center',
            //padding: '8px',
            //overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image={articalImage}
          alt="artical picture"
        />
      </Grid>
      <Grid
        item
        xs={7.5}
        sm={7.5}
        md={7.5}
        lg={7.5}
        xl={7.5}
        sx={{
            // wordBreak: 'break-word',
            // overflow: 'hidden',
            // padding: 0,
            lineHeight: '1',
            // paddingLeft: '18px'
            padding: '10px 16px 0px 16px',
        }}
      >
        <CardContentNoPadding
          sx={{
            fontColor: 'white',
            // paddingTop: '8px',
            // paddingLeft: '18px'
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
              //height: '100px',
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
    </Grid>
    </Card>
  );
  */
