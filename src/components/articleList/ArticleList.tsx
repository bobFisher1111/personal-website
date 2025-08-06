import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
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
    return b.article_id - a.article_id;
  });

  return (
    <Grid
      container
    >
      {noArticles ? 
        <ComingSoon />
        : sortByDate?.map((item: any) => (
          <Fragment key={item.article_id}>
            <ArticleCard
              articleId={item.article_id}
              authorData={authorData}
              articleMedia={item.cover_image_or_video}
              articlePage={false}
              authorId={item.author_id}
              date={formatDate(item.published_date)}
              isMediaVideo={item.use_video_instead_of_image}
              section={item.section}
              sectionLink={item.section_link}
              series={item.series_id}
              seriesId={item.series_id}
              subtitle={item.article_subtitle}
              title={item.article_title}
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
