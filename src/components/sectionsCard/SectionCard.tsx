import * as React from 'react';
import {
  Box,
} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SectionCardMDLargeXLarge from './SectionCardMDLargeXLarge';
import SectionCardXSmallSmall from './SectionCardXSmallSmall';
import SectionCardSmallMD from './SectionCardSmallMD';

const SectionCard: React.FC<Props> = ({
    imgCover,
    section,
    backGroundColor,    
  }) => {
// <Card sx={{ maxWidth: 345 }}>
  return (
    <Box >
      <SectionCardMDLargeXLarge 
        imgCover={imgCover}
        section={section}
        backGroundColor={backGroundColor}
      />
      <SectionCardXSmallSmall
        imgCover={imgCover}
        section={section}
        backGroundColor={backGroundColor}
      />
      <SectionCardSmallMD
        imgCover={imgCover}
        section={section}
        backGroundColor={backGroundColor}
      />
    </Box>
  );
}

export type Props = {
    imgCover: string;
    section: string;
    backGroundColor: string;
  };

export default SectionCard;