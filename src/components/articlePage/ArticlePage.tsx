import React, { useEffect } from 'react';
import {
  Grid,
} from '@mui/material';
import HorizontalArticleCardComponent from '../cards/articleCards/horizontalCard/HorizontalArticleCardComponent';
import AuthorComponent from '../authorComponents/AuthorComponent';
import { useSelector } from 'react-redux';
import CreateArticle from '../createArticle/CreateArticle';
import formatDate from '../../util/formatDate';
import getNameFromUrl from '../../util/getNameFromUrl';
import {
  CreateArticleRoot,
  CreateArticleStyle,
  GridRoot,
  GridHeader,
  GridAuthorComponent,
} from './ArticlePageStyles';

const ArticlePage: React.FC = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData && getWebsiteData?.websiteData;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[1];
    return Number(getIdFromCurrentLocation);
  };
  const getAuthor = webData?.authors?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const getArticles = webData?.articles?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const currentArticle = getArticles?.filter((item: any) => {
    return item.articleId === getNameFromUrl();
  });
  const getBook = webData?.books?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const authorData = getAuthor && getAuthor[0];
  const articleData = currentArticle && currentArticle[0];
  const articleArray = articleData?.article.split("`");

  useEffect(() => {
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
          item
          container
          justifyContent="center"
          alignContent='flex-start'
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={9}
          sx={GridHeader}
        >
          <Grid
            sx={CreateArticleRoot}
          >
            <HorizontalArticleCardComponent
              author={authorData?.authorName}
              cardTextWidth={'1000px'}
              date={formatDate(articleData?.publishedDate)}
              imageWidth={'1000px'}
              articlePage={true}
              articleSubTitle={articleData?.articleSubTitle}
              useVideoInsteadOfImage={articleData?.useVideoInsteadOfImage}
              authorsId={articleData?.authorId}
              articleId={articleData?.articleId}
              videoOrImageCover={articleData?.coverImageOrVideo}
              sectionLink={articleData?.sectionLink}
              section={articleData?.sections}
              title={articleData?.articleTitle}
              mobileImageWidth={'22px'}
              videoHeight={false}
            />
            <Grid
              item
              sx={CreateArticleStyle}
            >
              {articleArray?.map((item: any) => (
                CreateArticle(item)
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={0}
          xl={3}
          sx={GridAuthorComponent}
        >
          <AuthorComponent
            turOnArticlePage={true}
            articleAuthorData={authorData}
            articlelData={getArticles}
            authorName={authorData?.authorName}
            bookData={getBook}
            authorsData={authorData}
            seriesForArticlePage={true}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ArticlePage;
