import React, { useEffect } from 'react';
import {
  Grid,
} from '@mui/material';
import HeaderComponent from '../headerComponent/HeaderComponent';
import HorizontalArticleCardComponent from '../cards/articleCards/horizontalCard/HorizontalArticleCardComponent';
import AuthorComponent from '../authorComponents/AuthorComponent';
import { useSelector } from 'react-redux';
import CreateArticle from '../createArticle/CreateArticle';
import formatDate from '../../util/formatDate';
import getNameFromUrl from '../../util/getNameFromUrl';
import {
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
        justifyContent='flex-end'
        alignContent='center'
        sx={GridRoot}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          sx={GridHeader}
        >
          <HeaderComponent
            title={articleData?.articleTitle}
            authorAvatar={false}
          />
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
            mobileImageWidth={'22px'}
            videoHeight={false}
          />
          {articleArray?.map((item: any) => (
            CreateArticle(item)
          ))}
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={3}
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