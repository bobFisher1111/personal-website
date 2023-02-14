import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {
  Box,
} from "@mui/material";

const SectionCardMDLargeXLarge: React.FC<Props> = ({
    imgCover,
    section,
    backGroundColor,    
  }) => {
// <Card sx={{ maxWidth: 345 }}>
  return (
    <Box
      sx={{
        display:{
          xs: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        },
        minWidth: "220px",
        maxWidth: "220px",
        padding: '8px'
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
    </Box>
  );
}

export type Props = {
    imgCover?: string;
    section?: string;
    backGroundColor?: string;
  };

export default SectionCardMDLargeXLarge;
