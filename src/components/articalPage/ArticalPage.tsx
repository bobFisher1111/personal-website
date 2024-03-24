import React, { useEffect } from 'react';
import {
  Grid,
} from '@mui/material';
import HeaderComponent from '../headerComponent/HeaderComponent';
import HorizontalArticalCardComponent from '../cards/articalCards/horizontalCard/HorizontalArticalCardComponent';
import AuthorComponent from '../authorComponents/AuthorComponent';
import { useSelector } from 'react-redux';
import createArtical from '../createArticals/CreateArtical';
import formatDate from '../../util/formatDate';
import getNameFromUrl from '../../util/getNameFromUrl';
import {
  GridRoot,
  GridHeader,
  GridAuthorComponent,
} from './ArticalPageStyles';


const ArticalPage: React.FC = () => {
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
  const getArticals = webData?.articals?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const currentArtical = getArticals?.filter((item: any) => {
    return item.articalId === getNameFromUrl();
  });
  const getBook = webData?.books?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const authorData = getAuthor && getAuthor[0];
  const articalData = currentArtical && currentArtical[0];
  const articalArray = articalData?.artical.split("`");

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
            title={articalData?.articalTitle}
            authorAvatar={false}
          />
          <HorizontalArticalCardComponent
            author={authorData?.authorName}
            cardTextWidth={'1000px'}
            date={formatDate(articalData?.publishedDate)}
            imageWidth={'1000px'}
            articalPage={true}
            articalSubTitle={articalData?.articalSubTitle}
            useVideoInsteadOfImage={articalData?.useVideoInsteadOfImage}
            articalData={articalData}
            authorsId={articalData?.authorId}
            articalId={articalData?.articalId}
            videoOrImageCover={articalData?.coverImageOrVideo}
            sectionLink={articalData?.sectionLink}
            section={articalData?.sections}
            mobileImageWidth={'22px'}
            videoHeight={false}
          />
          {articalArray?.map((item: any) => (
            createArtical(item)
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
            turOnArticalPage={true}
            articalAuthorData={authorData}
            articalData={getArticals}
            authorName={authorData?.authorName}
            bookData={getBook}
            authorsData={authorData}
            seriesForArticalPage={true}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ArticalPage;