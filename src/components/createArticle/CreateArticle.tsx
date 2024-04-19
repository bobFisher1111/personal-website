import React from 'react';
import {
  Typography,
  Grid,
  Box,
  CardMedia,
  Link,
} from '@mui/material';
import {
  BulletListChildLinkStyles,
  ImageGrid,
  CreateArticleImage,
  CreateArticleVideo,
  LinkStyles,
  ParagraphTitleRoot,
  titleText,
  sectionText,
  sectionTextParagraph,
  quoteText,
  paragraphText,
  TitleTextWithPadding,
} from './CreateArticleStyles';
import CodeSnipit from './CodeSnipit';
import ReviewScore from './ReviewScore';

const imageExtensions = '.jpg' || '.jpeg' || '.jpg' || '.png';

export const CreateArticle = (articleData: string) => {
  if (articleData.match(imageExtensions)) {
    return (
      <Grid
        container
        justifyContent="center" // after mobile fixed
        sx={ImageGrid}
      >
        <Box
          component="img"
          alt="Article_Cover_Image"
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
        justifyContent="center" // after mobile fixed
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
        justifyContent="center" // after mobile fixed
        sx={ParagraphTitleRoot}
      >
        <Typography
          id="article_Paragraph_Title"
          color="#0C0D0D"
          sx={titleText}
        >
          { <strong>{articleData.slice(17)}</strong> }   
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[PARAGRAPH_TITLE_WITH_PADDING]')) {
    return (
      <Grid
        container
        justifyContent="center" // after mobile fixed
      >
        <Typography
          id="article_Paragraph_Title"
          color="#0C0D0D"
          sx={TitleTextWithPadding}
        >
          { <strong>{articleData.slice(30)}</strong> }   
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[BULLET_LIST]')) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <ul style={{"listStylePosition": "outside", "margin": "0px 16px 0px 0px"}}>
          <li>
            <Typography
              id="article_Bullet_List"
              color="#0C0D0D"
              sx={sectionTextParagraph}
            >
              {articleData.slice(13)} 
            </Typography>
          </li>
        </ul>
      </Grid>
    );
  }
  if (articleData.startsWith('[INDENT_TEXT]')) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography
          id="article_Bullet_List"
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
        justifyContent="center" // after mobile fixed
      >
        <Typography
          id="article_Quotes"
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
          id="article_Bullet_List_Child"
          color="#0C0D0D"
          sx={sectionText}
        >
          { articleData.slice(19) }
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[BULLET_LIST_CHILD_LINKS]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Link
          id="bullet_list_child_links"
          href={articleData.slice(25)}
          // underline="none"
          target="_blank"
          rel="noopener"
          sx={BulletListChildLinkStyles}
        >
          {articleData.slice(25)}
        </Link>
      </Grid>
    );
  }
  if (articleData.startsWith('[CODESNIPIT]')) {
    return (
      <Grid
        id="article_code_snipit"
        container
        justifyContent="center"
      >
        <CodeSnipit
          displayCode={articleData} 
        />
      </Grid>
    );
  }
  if (articleData.startsWith('[REVIEW]')) {
    return (
      <Grid
        id="article_review_score"
        container
        justifyContent="center"
      >
        <ReviewScore text={articleData} />
      </Grid>
    );
  }
  if (articleData.startsWith('[LINKS]')) {
    return (
      <Grid
        id="article_hyper_links"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Link
          href={articleData.slice(7)}
          // underline="none"
          target="_blank"
          rel="noopener"
          sx={LinkStyles}
        >
          {articleData.slice(7)}
        </Link>
      </Grid>
    );
  }
  return (
    <Grid
      container
      justifyContent="center"
    >
      <Typography
        id="article_text"
        color="#0C0D0D"
        sx={paragraphText}
      >
        { articleData }
      </Typography>
    </Grid>
  );
};

export default CreateArticle;
