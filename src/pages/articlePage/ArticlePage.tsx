import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import HorizontalArticleCardComponent from 'src/components/cards/HorizontalArticleCardComponent';
import formatDate from 'src/util/formatDate';
import getNameFromUrl from 'src/util/getNameFromUrl';
import {
  CreateArticleRoot,
  GridRoot,
  GridHeader,
} from './ArticlePageStyles';
import ArticleBody from './ArticleBody';

const ArticlePage = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[1];
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
    <>
      <Grid
        container
        justifyContent='center'
        alignContent='center'
        sx={GridRoot}
      >
        <Grid
          container
          justifyContent="center"
          alignContent='flex-start'
          size={{
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 9,
          }}
          sx={GridHeader}
        >
          <Grid
            sx={CreateArticleRoot}
          >
            <HorizontalArticleCardComponent
              author={authorData?.author_name}
              date={formatDate(articleData?.published_date)}
              imageWidth={'780px'}
              articlePage={true}
              authorsId={articleData?.author_id}
              videoOrImageCover={articleData?.cover_image_or_video}
              section={articleData?.section}
              mobileImageWidth={'22px'}
            />
            <ArticleBody html={articleData?.markdown_data} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticlePage;
