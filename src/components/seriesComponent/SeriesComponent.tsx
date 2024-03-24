import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import HeaderComponent from '../headerComponent/HeaderComponent';
import HorizontalArticalCardComponent from '../cards/articalCards/horizontalCard/HorizontalArticalCardComponent';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  seriesComponentGridRoot,
  seriesComponentGridHeader,
  seriesComponentGridArticalInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentdate,
} from './SeriesComponentStyles';

const SeriesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const seriesData = getWebsiteData && getWebsiteData?.websiteData;
  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split('/').reverse()[0];
    return Number(seriesId);
  };

  const getSeriesFromId = seriesData?.series?.filter((item: any) => {
    return item.seriesId === getSeriesIdFromUrl();
  });

  const getSeriesArticals = seriesData?.articals?.filter((item: any) => {
    return item.seriesId === getSeriesIdFromUrl();
  });
  const seriesInfo = getSeriesFromId && getSeriesFromId[0];
  const noArticals = getSeriesArticals?.length === 0;
  return (
    <>
      <Grid
        container
        justifyContent='flex-start'
        alignContent='center'
        sx={seriesComponentGridRoot}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={seriesComponentGridHeader}
        >
          <HeaderComponent
            title={seriesInfo?.seriesTitle}
            authorAvatar={false}
          />
          <HorizontalArticalCardComponent
            author={seriesInfo?.seriesAuthors}
            cardTextWidth={'1000px'}
            date={seriesInfo?.seriesStartDate}
            imageWidth={'1000px'}
            articalPage={true}
            articalSubTitle={'remove for series page'}
            useVideoInsteadOfImage={seriesInfo?.useVideoInsteadOfImage}
            articalData={seriesInfo}
            authorsId={seriesInfo?.authorId}
            articalId={'articalData?.articalId'}
            videoOrImageCover={seriesInfo?.seriesCoverImageOrVideo}
            sectionLink={seriesInfo?.sectionLink}
            section={seriesInfo?.section}
            series={true}
            mobileImageWidth={'30px'}
            videoHeight={true}
          />
        </Grid>
        {noArticals && 
          <ComingSoon />
        }
        { getSeriesArticals?.map((item: any, index: any) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={seriesComponentGridArticalInfo}
          >
            <Link to={`/artical/${item?.authorId}/${item?.articalId}`}
              style={LinkStyles()}
            >
              <Typography
                sx={seriesComponentTitle}
              >
                {`${item?.seriesType} ${index + 1}: ${item?.articalTitle}`}
              </Typography>
              <Typography
                sx={seriesComponentSubTitle} 
              >
                {item.articalSubTitle}
              </Typography>
              <Typography
                sx={seriesComponentdate}
              >
                {formatDate(item.publishedDate)}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SeriesComponent;
