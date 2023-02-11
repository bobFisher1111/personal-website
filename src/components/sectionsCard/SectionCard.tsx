import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SectionCard: React.FC<Props> = ({
    imgCover,
    section,
    backGroundColor,    
  }) => {
// <Card sx={{ maxWidth: 345 }}>
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{
          // width: '50%'
        }}
        component="img"
        alt="section image"
        // width="280"
        height="200" // 140
        image={imgCover}
      />
      <CardActions sx={{ backgroundColor: backGroundColor, justifyContent: 'center' }}>
        <Button size="small" sx={{ color: 'white' }}>{section}</Button>
      </CardActions>
    </Card>
  );
}

export type Props = {
    imgCover: string;
    section: string;
    backGroundColor: string;
  };

export default SectionCard;