import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import ArticleCard from "src/components/cards/ArticleCard";
import ComingSoon from "src/components/comingSoon/ComingSoon";
import formatDate from "src/util/formatDate";
import type { Article } from "src/types/articals";
import type { Author } from "src/types/authors";

export const ArticleList = ({ authorData, data }: Props) => {
  if (!data || data.length === 0) {
    return <ComingSoon />;
  }

  const sortByDate = [...data].sort((a, b) => b.article_id - a.article_id);

  return (
    <Grid container>
      {sortByDate.map((item) => (
        <Fragment key={item.article_id}>
          <ArticleCard
            articleId={item.article_id}
            authorData={authorData}
            articleMedia={item.cover_image_or_video}
            authorId={item.author_id}
            date={formatDate(item.published_date)}
            section={item.section}
            seriesId={item.series_id}
            subtitle={item.article_subtitle}
            title={item.article_title}
          />
        </Fragment>
      ))}
    </Grid>
  );
};

export type Props = {
  authorData: readonly Author[];
  data: readonly Article[];
};

export default ArticleList;
