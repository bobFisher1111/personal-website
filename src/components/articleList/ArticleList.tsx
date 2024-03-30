import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import HorizontalArticleCardComponent from '../cards/articleCards/horizontalCard/HorizontalArticleCardComponent';
import {
  GridPaddingArticleList,
  GridPaddingTop,
  TypographyArticlePageArticles,
  TypographyHorizontalArticleTitleArticleList,
} from './ArticleListStyles';

export const ArticleList: React.FC<Props> = ({
  turOnAuthorForArticle, 
  data,
}) => {
  const noArticles = data?.length === 0;
  const newNonImmutableArray = data?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    const date1: any = new Date(a.publishedDate);
    const date2: any = new Date(b.publishedDate);
    return date2 - date1;
  });
  
  return (
    <>
      {noArticles && 
          <ComingSoon />
      }
      {!turOnAuthorForArticle &&
          <>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={GridPaddingArticleList}
            />
            { sortByDate?.map((item: any) => (
              <>
                <Typography
                  sx={TypographyHorizontalArticleTitleArticleList(false)}
                >
                  {item.articleTitle}
                </Typography>
                <HorizontalArticleCardComponent
                  key={item.id}
                  title={item.articleTitle}
                  articleSubTitle={item.articleSubTitle}
                  author={item.author}
                  cardTextWidth={'639px'}
                  date={formatDate(item.publishedDate)}
                  imageWidth={'321px'}
                  articlePage={false}
                  useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                  section={item.sections}
                  authorsId={item.authorId}
                  articleId={item.articleId}
                  videoOrImageCover={item.coverImageOrVideo}
                  sectionLink={item.sectionLink}
                  series={item.series}
                  seriesId={item.seriesId}
                  mobileImageWidth={'32px'}
                  videoHeight={false}
                  sectionType={item.sectionType}
                />
              </>
            ))}
          </>
      }
      {turOnAuthorForArticle &&
          <>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={GridPaddingTop}
            >
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
              >
                { sortByDate?.map((item: any, index: any) => (
                  <>
                    <Typography 
                      variant="body1"
                      color="#2F4C69"
                      sx={TypographyArticlePageArticles}
                    >
                      {item.articleTitle}
                    </Typography>
                    <HorizontalArticleCardComponent
                      key={index}
                      title={item.articleTitle}
                      articleSubTitle={item.articleSubTitle}
                      author={item.author}
                      cardTextWidth={'639px'}
                      date={formatDate(item.publishedDate)}
                      imageWidth={'321px'}
                      articlePage={false}
                      useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                      section={item.sections}
                      authorsId={item.authorId}
                      articleId={item.articleId}
                      videoOrImageCover={item.coverImageOrVideo}
                      sectionLink={item.sectionLink}
                      articlePageList={true}
                      series={item.series}
                      seriesId={item.seriesId}
                      mobileImageWidth={'48px'}
                      videoHeight={false}
                    />
                  </>
                ))}
              </Grid>
            </Grid>
          </>
      }
    </>
  );
};

export type Props = {
  turOnAuthorForArticle: boolean, 
  data: any, 
};

export default ArticleList;
