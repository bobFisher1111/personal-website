import React from 'react';
import {
  Typography,
  Grid,
  Box,
  CardMedia
} from '@mui/material';
import {
  ImageGrid,
  CreateArticalImage,
  CreateArticalVideo,
  titleText,
  sectionText,
  sectionTextParagraph,
  quoteText,
  paragraphText,
} from './CreateArticalStyles';

const imageExtensions = '.jpg' || '.jpeg' || '.jpg' || '.png';

export const CreateArtical = (articalData: string) => {
  if (articalData.match(imageExtensions)) {
    return (
      <Grid
        container
        justifyContent="center"
        sx={ImageGrid}
      >
        <Box
          component="img"
          alt="Artical Cover Image"
          src={articalData}
          sx={CreateArticalImage}
        />
      </Grid>
    );
  }
  if (articalData.match('youtube.com')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <CardMedia
          component="iframe"
          image={articalData}
          allowFullScreen
          sx={CreateArticalVideo}
        />
      </Grid>
    );
  }
  if (articalData.startsWith('[PARAGRAPH_TITLE]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#2F4C69"
          sx={titleText}
        >
          { <strong>{articalData.slice(17)}</strong> }   
        </Typography>
      </Grid>
    );
  }
  if (articalData.startsWith('[BULLET_LIST]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#76468c"
          sx={sectionTextParagraph}
        >
          {articalData.slice(13)} 
        </Typography>
      </Grid>
    );
  }
  if (articalData.startsWith('[QUOTES]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#667A6E"
          sx={quoteText}
        >
          {/*eslint-disable-next-line */}
          {<i>"{articalData.slice(8)}"</i>} 
        </Typography>
      </Grid>
    );
  }
  if (articalData.startsWith('[BULLET_LIST_CHILD]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#2F4C69"
          sx={sectionText}
        >
          { articalData.slice(19) }
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid
      container
      justifyContent="center"
    >
      <Typography
        id="articalText"
        color="#2F4C69"
        sx={paragraphText}
      >
        { articalData }
      </Typography>
    </Grid>
  );
};

export default CreateArtical;
