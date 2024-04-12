import React from 'react';
import {
  Typography,
  Grid,
  Box,
  CardMedia
} from '@mui/material';
import {
  ImageGrid,
  CreateArticleImage,
  CreateArticleVideo,
  titleText,
  sectionText,
  sectionTextParagraph,
  quoteText,
  paragraphText,
} from './CreateArticleStyles';
import CodeSnipit from './CodeSnipit';

const imageExtensions = '.jpg' || '.jpeg' || '.jpg' || '.png';

export const CreateArticle = (articleData: string) => {
  if (articleData.match(imageExtensions)) {
    return (
      <Grid
        container
        justifyContent="center"
        sx={ImageGrid}
      >
        <Box
          component="img"
          alt="Article Cover Image"
          src={articleData}
          sx={CreateArticleImage}
        />
      </Grid>
    );
  }
  if (articleData.match('youtube.com')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <CardMedia
          component="iframe"
          image={articleData}
          allowFullScreen
          sx={CreateArticleVideo}
        />
      </Grid>
    );
  }
  if (articleData.startsWith('[PARAGRAPH_TITLE]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article Paragraph Title"
          color="#0C0D0D"
          sx={titleText}
        >
          { <strong>{articleData.slice(17)}</strong> }   
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[BULLET_LIST]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article Bullet List"
          color="#0C0D0D"
          sx={sectionTextParagraph}
        >
          {articleData.slice(13)} 
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[QUOTES]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article Quotes"
          color="#667A6E"
          sx={quoteText}
        >
          {/*eslint-disable-next-line */}
          {<i>"{articleData.slice(8)}"</i>} 
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[BULLET_LIST_CHILD]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article Bullet List Child"
          color="#0C0D0D"
          sx={sectionText}
        >
          { articleData.slice(19) }
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[CODESNIPIT]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <CodeSnipit displayCode={articleData} />
      </Grid>
    );
  }
  return (
    <Grid
      container
      justifyContent="center"
    >
      <Typography
        id="articleText"
        color="#0C0D0D"
        sx={paragraphText}
      >
        { articleData }
      </Typography>
    </Grid>
  );
};

export default CreateArticle;
