import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import HorizontalArticleCardComponent from '../cards/articleCards/horizontalCard/HorizontalArticleCardComponent';
import { useSelector } from 'react-redux';
// import CreateArticle from '../createArticle/CreateArticle';
import formatDate from '../../util/formatDate';
import getNameFromUrl from '../../util/getNameFromUrl';
import {
  CreateArticleRoot,
  // CreateArticleStyle,
  GridRoot,
  GridHeader,
} from './ArticlePageStyles';
import MarkDownComponent from './MarkDownComponent';

const ArticlePage: React.FC = () => {
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
  // const articleArray = articleData?.article.split("`");

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
              cardTextWidth={'1000px'}
              date={formatDate(articleData?.published_date)}
              imageWidth={'1000px'}
              articlePage={true}
              articleSubTitle={articleData?.article_subtitle}
              useVideoInsteadOfImage={articleData?.use_video_instead_of_image}
              authorsId={articleData?.author_id}
              articleId={articleData?.article_id}
              videoOrImageCover={articleData?.cover_image_or_video}
              sectionLink={articleData?.section_link}
              section={articleData?.section}
              title={articleData?.article_title}
              mobileImageWidth={'22px'}
              videoHeight={false}
            />
            
            <Grid
              // sx={CreateArticleStyle}
            >
              {/* {articleArray?.map((item: any) => (
                CreateArticle(item)
              ))} */}
              <MarkDownComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticlePage;
