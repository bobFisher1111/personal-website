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
  BulletListChildTextStyles,
  BulletListUnorderedListStyles,
  GridBulletListUnorderedListStyles,
  ImageGrid,
  CreateArticleImage,
  CreateArticleVideo,
  LinkStyles,
  ParagraphTitleRoot,
  titleText,
  sectionTextStyle,
  sectionTextParagraph,
  quoteText,
  paragraphText,
  TitleTextWithPadding,
} from './CreateArticleStyles';
import CodeSnipit from './CodeSnipit';
import ReviewScore from './ReviewScore';

const imageExtensions = '.jpg' || '.jpeg' || '.jpg' || '.png';

export const CreateArticle = (articleData: string) => {
  // Looks Good On Coding, 
  if (articleData.match(imageExtensions)) {
    return (
      <Grid
        container
        justifyContent="center"
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
  // Looks Good On Coding, 
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
  // Looks Good On Coding, 
  if (articleData.startsWith('[PARAGRAPH_TITLE]')) {
    return (
      <Grid
        container
        justifyContent="flex-start"
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
  // Not Being Used
  if (articleData.startsWith('[PARAGRAPH_TITLE_WITH_PADDING]')) {
    return (
      <Grid
        container
        justifyContent="center"
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
  // Looks Good On Coding, 
  if (articleData.startsWith('[BULLET_LIST]')) {
    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={GridBulletListUnorderedListStyles}
      >
        <ul
          // style={{"listStylePosition": "outside", "margin": "0px 16px 0px 0px"}}
          style={BulletListUnorderedListStyles()}
        >
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
  // Looks Good On Coding, 
  if (articleData.startsWith('[SECTION]')) {
    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={GridBulletListUnorderedListStyles}
      >
        <Typography
          id="article_Bullet_List"
          color="#0C0D0D"
          sx={sectionTextStyle}
        >
          {articleData.slice(9)} 
        </Typography>
      </Grid>
    );
  }
  // Not being used
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
  // Need work
  if (articleData.startsWith('[QUOTES]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article_Quotes"
          color="grey"
          sx={quoteText}
        >
          {/*eslint-disable-next-line */}
          {<i>"{articleData.slice(8)}"</i>} 
        </Typography>
      </Grid>
    );
  }
  // Being used on Reviews
  if (articleData.startsWith('[BULLET_LIST_CHILD]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article_Bullet_List_Child"
          color="#0C0D0D"
          sx={BulletListChildTextStyles}
        >
          { articleData.slice(19) }
        </Typography>
      </Grid>
    );
  }
  // Looks good on Coding
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
  // Looks Good On Coding
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
  // Needs work
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
  // used on Coding
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
          { articleData.slice(7) }
        </Link>
      </Grid>
    );
  }
  // looks good
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
