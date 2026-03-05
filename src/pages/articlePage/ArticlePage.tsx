import { useLayoutEffect } from "react";
import { useAppSelector } from "src/store/redux/hooks";
import { Grid, Typography } from "@mui/material";
import HorizontalArticleCardComponent from "src/components/cards/HorizontalArticleCardComponent";
import PageContainer from "src/components/pageContainer/PageContainer";
import formatDate from "src/util/formatDate";
import getNameFromUrl from "src/util/getNameFromUrl";
import ArticleBody from "./ArticleBody";
import {
  ArticleSubtitleTypographyStyles,
  ArticleTitleTypographyStyles,
} from "./ArticlePageStyles";
import ReviewScore from "./ReviewScore";
import { ReviewScoreWrapperStyles } from "./ReviewScoreStyles";

const ArticlePage = () => {
  const getWebsiteData = useAppSelector((state) => state.webSiteData.data);
  const webData = getWebsiteData;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/").reverse()[1];
    return Number(getIdFromCurrentLocation);
  };
  const getAuthor = webData?.authors?.filter((item: any) => {
    return item.author_id === getIdFromUrl();
  });
  const getArticles = webData?.articles?.filter((item: any) => {
    return item.author_id === getIdFromUrl();
  });
  const currentArticle = getArticles?.filter((item: any) => {
    return item.article_id === getNameFromUrl();
  });
  const authorData = getAuthor && getAuthor[0];
  const articleData = currentArticle && currentArticle[0];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <Typography
        color="primary"
        variant="h1"
        sx={ArticleTitleTypographyStyles}
      >
        {articleData?.article_title}
      </Typography>
      <Typography
        color="primary"
        variant="h2"
        sx={ArticleSubtitleTypographyStyles}
      >
        {articleData?.article_subtitle}
      </Typography>
      <HorizontalArticleCardComponent
        author={authorData?.author_name}
        date={formatDate(articleData?.published_date)}
        imageWidth={"832px"}
        authorsId={articleData?.author_id}
        videoOrImageCover={articleData?.cover_image_or_video}
        section={articleData?.section}
        mobileImageWidth={"22px"}
      />
      <ArticleBody html={articleData?.markdown_data} />
      {articleData?.is_review && (
        <Grid container justifyContent="center" sx={ReviewScoreWrapperStyles}>
          <ReviewScore text={articleData?.review} />
        </Grid>
      )}
    </PageContainer>
  );
};

export default ArticlePage;
