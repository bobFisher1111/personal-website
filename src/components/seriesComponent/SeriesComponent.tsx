import React from 'react';
import {
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import HorizontalArticleCardComponent from '../cards/articleCards/horizontalCard/HorizontalArticleCardComponent';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  seriesComponentGridRoot,
  seriesComponentGridArticleInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentdate,
} from './SeriesComponentStyles';

const SeriesComponent = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
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

  const getSeriesArticles = seriesData?.articles?.filter((item: any) => {
    return item.seriesId === getSeriesIdFromUrl();
  });
  const seriesInfo = getSeriesFromId && getSeriesFromId[0];
  const noArticles = getSeriesArticles?.length === 0;
  const sortSeriesList = getSeriesArticles?.sort((a: any, b: any) => {
    return a.articleId - b.articleId;
  });

  return (
    <Grid
      container
      justifyContent='flex-start'
      alignContent='center'
      sx={seriesComponentGridRoot}
    >
      <Grid
        size={12}
      >
        <HorizontalArticleCardComponent
          author={seriesInfo?.seriesAuthors}
          cardTextWidth={'1000px'}
          date={formatDate(seriesInfo?.seriesStartDate)}
          imageWidth={'1000px'}
          articlePage={true}
          articleSubTitle={'remove for series page'}
          useVideoInsteadOfImage={seriesInfo?.useVideoInsteadOfImage}
          authorsId={seriesInfo?.authorId}
          articleId={'articleData?.articleId'}
          videoOrImageCover={seriesInfo?.seriesCoverImageOrVideo}
          sectionLink={seriesInfo?.sectionLink}
          section={seriesInfo?.section}
          series={true}
          mobileImageWidth={'30px'}
          videoHeight={true}
        />
      </Grid>
      {noArticles && 
        <ComingSoon />
      }
      {sortSeriesList?.map((item: any) => (
        <Grid
          key={item.id}
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          sx={seriesComponentGridArticleInfo}
        >
          <Link to={`/article/${item?.authorId}/${item?.articleId}`}
            style={LinkStyles(theme)}
          >
            <Typography
              color="primary"
              sx={seriesComponentTitle}
            >
              {`${item?.seriesType}: ${item?.articleTitle}`}
            </Typography>
            <Typography
              color="primary"
              sx={seriesComponentSubTitle} 
            >
              {item.articleSubTitle}
            </Typography>
            <Typography
              color="primary"
              sx={seriesComponentdate}
            >
              {formatDate(item.publishedDate)}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SeriesComponent;
