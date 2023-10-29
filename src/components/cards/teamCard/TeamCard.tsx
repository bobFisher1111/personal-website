import React from 'react';
import { 
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
} from '@mui/material/';
import { 
  GridOverflowHeader,
} from './TeamCardStyles';

const TeamCard: React.FC<Props> = ({
  firstName,
  lastName,
  title,
  avatarImage,
  teamInfo,    
}) => {
  return (
    <Card 
      sx={{ 
        display: 'flex',
        backgroundColor: '#282c34',
        wordWrap: 'break-word',
        border: '2px solid #2F4C69',
      }}
    >
      <Grid 
        container
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '16px'
          }}
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
          sx={GridOverflowHeader}
        >
          <CardContent sx={{fontColor: 'white'}}>
            <Typography component="span" variant="h5" color="white">
              {firstName} {lastName}
            </Typography>
            <Typography variant="subtitle1" color="white" component="span">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="white" component="span">
              {teamInfo}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export type Props = {
  firstName: string;
  lastName: string;
  title?: string;
  teamInfo?: string;
  avatarImage?: string;
};

export default TeamCard;
