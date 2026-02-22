import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import ArticleCard from "src/components/cards/ArticleCard";
import ComingSoon from "src/components/comingSoon/ComingSoon";
import formatDate from "src/util/formatDate";

export const ArticleList = ({ authorData, data }: Props) => {
  const newNonImmutableArray = data?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort(
    (a: any, b: any) => b.article_id - a.article_id,
  );

  if (!data || data.length === 0) {
    return <ComingSoon />;
  };

  return (
    <Grid container>
      {sortByDate?.map((item: any) => (
        <Fragment key={item.article_id}>
          <ArticleCard
            articleId={item.article_id}
            authorData={authorData}
            articleMedia={item.cover_image_or_video}
            authorId={item.author_id}
            date={formatDate(item.published_date)}
            section={item.section}
            series={item.series_id}
            seriesId={item.series_id}
            subtitle={item.article_subtitle}
            title={item.article_title}
          />
        </Fragment>
      ))
    }
    </Grid>
  );
};

export type Props = {
  authorData?: any;
  data: any;
};

export default ArticleList;
