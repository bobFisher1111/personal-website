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
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0 16px;
  &:last-child {
    padding-bottom: 0;
  }
`);

const SectionCardSmallMD: React.FC<Props> = ({
  imgCover,
  section,
  backGroundColor, 
}) => {

  const theme = useTheme();
  const contactDescription = "";
  // <CircleOutlinedIcon sx={{ fontSize: 20 }} />
  return (
    <Box
      sx={{
        // minWidth: "220px",
        // maxWidth: "220px",
      }}
    >
    
    <Grid 
      container 
      spacing={2}
      sx={{
        padding: '0px 0px 16px 0px',
        display:{
          xs: "none",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
          minWidth: "220px",
          maxWidth: "220px",
        },
      }}
    >
      
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
            wordBreak: 'break-word',
            overflow: 'hidden',
            padding: 0,
            lineHeight: '1'
        }}
      >
        <Card 
      sx={{ 
        // maxWidth: 400,
        
      }}>
      <CardMedia
        sx={{
          // width: '50%',
          
        }}
        component="img"
        alt="section image"
        // width="280"
        height="100" // 140
        image={imgCover}
      />
      <CardActions sx={{ backgroundColor: backGroundColor, justifyContent: 'center' }}>
        <Button size="small" sx={{ color: 'white' }}>{section}</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
   
    </Box>
  );
}

export type Props = {
  imgCover: string,
  section: string,
  backGroundColor: string, 
};

export default SectionCardSmallMD;
