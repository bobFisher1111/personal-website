import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import foxGirl from '../../assets/images/foxGirl.png';


const TeamCard: React.FC<Props> = ({
  firstName,
  lastName,
  title,
  avatarImage,
  teamInfo,    
}) => {

  const theme = useTheme();
  const contactDescription = "";

  return (
    <Card 
      sx={{ 
        display: 'flex',
        backgroundColor: '#282c34',
        wordWrap: 'break-word',
        border: '2px solid #2F4C69',
      }}
    >
    <Grid container xs={12}>
      <Grid
      item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
       >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={avatarImage}
          alt="team member avatar"
        />
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        sx={{
            wordBreak: 'break-word',
            overflow: 'hidden',
        }}
      >
        <CardContent sx={{fontColor: 'white'}}>
          <Typography component="div" variant="h5" color="white">
            {firstName} {lastName}
          </Typography>
          <Typography variant="subtitle1" color="white" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="white" component="div"
          >
            {teamInfo}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
    </Card>
  );
}

export type Props = {
  firstName: string;
  lastName: string;
  title?: string;
  teamInfo?: string;
  avatarImage?: string;
};

export default TeamCard;
