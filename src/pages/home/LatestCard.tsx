import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
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

const CardContentNoPadding = styled(CardContent)(`
  padding: 0 16px;
  &:last-child {
    padding-bottom: 0;
  }
`);

const LatestCard: React.FC<Props> = ({
  firstName,
  lastName,
  title,
  teamInfo,
  order,
}) => {

  const theme = useTheme();
  const contactDescription = "";
  // <CircleOutlinedIcon sx={{ fontSize: 20 }} />
  return (
    <Card 
      sx={{ 
        display: 'flex',
        backgroundColor: '#fff', // #282c34', #DBDBE9
        wordWrap: 'break-word',
        // border: '2px solid #2F4C69',
        // boxShadow: 'none',
        border: '1px solid #667A6E',
        minHeight: '172px',
        maxHeight: '172px',
        padding: '8px',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
      }}
    >
    <Grid 
      container 
      xs={12}
      sx={{
        padding: '0px 0px 16px 0px'
      }}
    >
      <Grid
        item
        sx={{
          padding: '5px'
        }}
      >
        <Typography 
          variant='h5'
          sx={{
            height: '20px',
            width: '20px',
            borderRadius: '50%',
            border: '1px solid #2F4C69',
            backgroundColor: '#fff',
            textAlign: 'center',
            alignItems: 'center',
            fontSize: '15px',
            color: '#2F4C69',
          }}
        >
          7
        </Typography>

      </Grid>
      
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        sx={{
            wordBreak: 'break-word',
            overflow: 'hidden',
            padding: 0,
            lineHeight: '1'
        }}
      >
        <CardContentNoPadding sx={{fontColor: 'white'}}>
          <Typography component="div" variant="h6" color="black">
            {firstName} {lastName}
          </Typography>
          <Typography variant="subtitle1" color="black" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="black" component="div"
          >
            {teamInfo}
          </Typography>
          </CardContentNoPadding>
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
  order?: number;
};

export default LatestCard;
