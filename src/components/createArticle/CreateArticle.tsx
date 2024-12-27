import React from 'react';
import {
  Typography,
  Box,
  CardMedia,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  BulletListChildLinkStyles,
  BulletListChildTextStyles,
  BulletListUnorderedListStyles,
  DDTagStylesNested,
  GridBulletListUnorderedListStyles,
  ImageGrid,
  CreateArticleImage,
  CreateArticleVideo,
  LinkStyles,
  NestedSectionTextParagraph,
  ParagraphIndentStyle,
  titleText,
  sectionTextStyle,
  sectionTextParagraph,
  StoryChapterStyle,
  StoryParagraphTitleRoot,
  StoryTitleStyle,
  StoryTitleStyleRoot,
  quoteText,
  paragraphText,
  TitleTextWithPadding,
  ULTagSylesForNested,
} from './CreateArticleStyles';
import CodeSnipit from './CodeSnipit';
import ReviewScore from './ReviewScore';

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
        justifyContent="flex-start"
      >
        <Typography
          id="article_Paragraph_Title"
          color="primary"
          sx={titleText}
        >
          { <strong>{articleData.slice(17)}</strong> }   
        </Typography>
      </Grid>
    );
  }
  if (articleData.startsWith('[STORY_CHAPTER]')) {
    return (
      <Grid
        container
        justifyContent="center"
        sx={StoryParagraphTitleRoot}
      >
        <Typography
          id="article_Chapter"
          color="primary"
          sx={StoryChapterStyle}
        >
          { <strong>{articleData.slice(15)}</strong> }   
        </Typography>
      </Grid>
    );
  }

  if (articleData.startsWith('[PARAGRAPH_TITLE_WITH_PADDING]')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="article_Paragraph_Title"
          color="primary"
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
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={GridBulletListUnorderedListStyles}
      >
        <ul
          style={BulletListUnorderedListStyles()}
        >
          <li>
            <Typography
              id="article_Bullet_List"
              color="primary"
              sx={sectionTextParagraph}
            >
              {articleData.slice(13)} 
            </Typography>
          </li>
        </ul>
      </Grid>
    );
  }

  if (articleData.startsWith('[BULLET_LIST_NESTED]')) {
    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={GridBulletListUnorderedListStyles}
      >
        <ul
          style={ULTagSylesForNested()}
        >
          <dd style={DDTagStylesNested()}>
            <ul>
              <li>
                <Typography
                  id="article_Bullet_List"
                  color="primary"
                  sx={NestedSectionTextParagraph}
                >
                  {articleData.slice(20)} 
                </Typography>
              </li>
            </ul>
          </dd>
        </ul>
      </Grid>
    );
  }

  if (articleData.startsWith('[SECTION]')) {
    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={GridBulletListUnorderedListStyles}
      >
        <Typography
          id="article_section"
          color="primary"
          sx={sectionTextStyle}
        >
          {articleData.slice(9)} 
        </Typography>
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
          id="article_indent_text"
          color="primary"
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
          color="primary"
          id="article_Quotes"
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
          color="primary"
          sx={BulletListChildTextStyles}
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
          target="_blank"
          rel="noopener"
          sx={LinkStyles}
        >
          { articleData.slice(7) }
        </Link>
      </Grid>
    );
  }

  if (articleData.startsWith('[PARAGRAPH_INDENT]')) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography
          id="article_paragraph_indent"
          color="primary"
          sx={ParagraphIndentStyle}
        >
          {articleData.slice(18)} 
        </Typography>
      </Grid>
    );
  }

  if (articleData.startsWith('[STORY_TITLE]')) {
    return (
      <Grid
        container
        justifyContent="center"
        sx={StoryTitleStyleRoot}
      >
        <Typography
          id="article_story_title"
          color="primary"
          sx={StoryTitleStyle}
        >
          { <strong>{articleData.slice(13)}</strong> }   
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid
      container
      justifyContent="flex-start"
    >
      <Typography
        id="article_text"
        color="primary"
        sx={paragraphText}
      >
        { articleData }
      </Typography>
    </Grid>
  );
};

export default CreateArticle;
