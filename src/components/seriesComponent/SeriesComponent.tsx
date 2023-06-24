import React, { useEffect } from 'react';
import {
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SectionsComponent from '../sections/SectionsComponent';
import { useSelector } from 'react-redux';
import HeaderComponent from "../headerComponent/HeaderComponent";
import HorizontalArticalCardComponent from "../cards/articalCards/horizontalCard/HorizontalArticalCardComponent";
import ArticalsList from "../articalTabs/ArticalsList";

const SeriesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const seriesData = getWebsiteData && getWebsiteData;

  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split("/").reverse()[0];
    return (seriesId);
  }

  const getSeriesFromId = seriesData?.series?.filter((item: any) => {
    return item.seriesId === getSeriesIdFromUrl();
  });

  const getSeriesArticals = seriesData?.articals?.filter((item: any) => {
    return item.seriesId === getSeriesIdFromUrl();
  });

  const seriesInfo = getSeriesFromId && getSeriesFromId[0];

  return (
    <>
      <Grid
      container
      justifyContent='flex-start'
      alignContent='center'
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        maxWidth: "1024px",
        margin: 'auto',
        padding: '40px 16px 100px 16px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
            alignItems: 'center',
          }}
      >
        <HeaderComponent
          title={seriesInfo?.seriesTitle}
          backgroundColor={'white'}
          fontColor='#2F4C69'
          lineHeight={'40px'}
          fontSize={'32px'}
          authorAvatar={false}
          headerTopPadding={true}
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
          turnOnSubTitle={false}
          series={true}
        />
        <Divider
          sx={{
            borderColor: '#282c34',
            padding: '0px 0px 16px 0px',
          }}
        />
      </Grid>
      { getSeriesArticals?.map((item: any, index: any) => (
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          padding: '32px 0px 16px 0px',
        }}
      >
        <Link to={`/artical/${item?.authorId}/${item?.articalId}`}
          style={{
            textDecoration: "none"
          }}
        >
        <Typography
          sx={{
            fontSize: '20px',
            padding: '0px 16px 0px 16px',
            color: '#2F4C69',
          }}
        >
            {`${item?.seriesType} ${index + 1}: ${item?.articalTitle}`}
        </Typography>
        <Typography
           sx={{ 
            color: '#667A6E',
            fontSize:'16px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            fontFamily: 'sans-serif',
            padding: '0px 16px 0px 16px'
          }} 
        >
            {item.articalSubTitle}
        </Typography>
        <Typography
          sx={{
            fontSize:'14px',
            color: '#76468c',
            padding: '0px 16px 0px 16px'
          }}
        >
            {item.publishedDate}
        </Typography>
        </Link>
      </Grid>
      ))}
    </Grid>
    </>
  );
}

export default SeriesComponent;
