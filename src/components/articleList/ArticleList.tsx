import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid2';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import ArticleCard from '../cards/articleCards/horizontalCard/articleCard/ArticleCard';

export const ArticleList: React.FC<Props> = ({
  authorData,
  data,
}) => {
  const noArticles = data?.length === 0;
  const newNonImmutableArray = data?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    return b.articleId - a.articleId;
  });

  return (
    <Grid
      container
    >
      {noArticles ? 
        <ComingSoon />
        : sortByDate?.map((item: any) => (
          <Fragment key={item.articleId}>
            <ArticleCard
              articleId={item.articleId}
              authorData={authorData}
              articleMedia={item.coverImageOrVideo}
              articlePage={false}
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
          </Fragment>
        ))}
    </Grid>
  );
};

export type Props = {
  authorData?: any,
  data: any,
  turOnAuthorForArticle: boolean,
};

export default ArticleList;
