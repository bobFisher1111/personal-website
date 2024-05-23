import React from 'react';
import {
  Grid,
} from '@mui/material';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import ArticleCard from '../cards/articleCards/horizontalCard/articleCard/ArticleCard';
import {
  GridAuthorArticle,
  GridPaddingArticleList,
  GridPaddingTop,
} from './ArticleListStyles';

export const ArticleList: React.FC<Props> = ({
  authorData,
  data,
  turOnAuthorForArticle,
}) => {
  const noArticles = data?.length === 0;
  const newNonImmutableArray = data?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    return b.articleId - a.articleId;
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
                <ArticleCard
                  articleId={item.articleId}
                  authorData={authorData}
                  articleMedia={item.coverImageOrVideo}
                  authorId={item.authorId}
                  date={formatDate(item.publishedDate)}
                  isMediaVideo={item.useVideoInsteadOfImage}
                  section={item.sections}
                  sectionLink={item.sectionLink}
                  series={item.series}
                  seriesId={item.seriesId}
                  subtitle={item.articleSubTitle}
                  title={item.articleTitle}
                  turOnAuthorForArticle={false}
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
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={GridAuthorArticle}
              > 
                { sortByDate?.map((item: any) => (
                  <>
                    <ArticleCard
                      articleId={item.articleId}
                      authorData={authorData}
                      articleMedia={item.coverImageOrVideo}
                      authorId={item.authorId}
                      date={formatDate(item.publishedDate)}
                      isMediaVideo={item.useVideoInsteadOfImage}
                      section={item.sections}
                      sectionLink={item.sectionLink}
                      series={item.series}
                      seriesId={item.seriesId}
                      subtitle={item.articleSubTitle}
                      title={item.articleTitle}
                      turOnAuthorForArticle={true}
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
  authorData?: any,
  data: any,
  turOnAuthorForArticle: boolean,  
};

export default ArticleList;
