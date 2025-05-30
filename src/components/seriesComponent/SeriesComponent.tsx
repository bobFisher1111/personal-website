import React, {useId} from 'react';
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
  const id = useId();
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const seriesData = getWebsiteData;
  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split('/').reverse()[0];
    return Number(seriesId);
  };
  const getSeriesFromId = seriesData?.series?.filter((item: any) => {
    return item.series_id === getSeriesIdFromUrl();
  });

  const getSeriesArticles = seriesData?.articles?.filter((item: any) => {
    return item.series_id === getSeriesIdFromUrl();
  });
  const seriesInfo = getSeriesFromId && getSeriesFromId[0];
  const noArticles = getSeriesArticles?.length === 0;
  const sortSeriesList = getSeriesArticles?.sort((a: any, b: any) => {
    return a.article_id - b.article_id;
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
          author={seriesInfo?.series_authors}
          cardTextWidth={'1000px'}
          date={formatDate(seriesInfo?.series_start_date)}
          imageWidth={'1000px'}
          articlePage={true}
          articleSubTitle={'remove for series page'}
          useVideoInsteadOfImage={seriesInfo?.use_video_instead_of_image}
          authorsId={seriesInfo?.author_id}
          articleId={'articleData?.articleId'}
          videoOrImageCover={seriesInfo?.series_cover_image_or_video}
          sectionLink={seriesInfo?.section_link}
          section={seriesInfo?.section}
          series={true}
          mobileImageWidth={'30px'}
          videoHeight={true}
        />
      </Grid>
      {noArticles && 
        <ComingSoon />
      }
      {sortSeriesList?.map((item: any, index: number) => (
        <Grid
          key={`${id}-${index}`}
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          sx={seriesComponentGridArticleInfo}
        >
          <Link to={`/article/${item?.author_id}/${item?.article_id}`}
            style={LinkStyles(theme)}
          >
            <Typography
              color="primary"
              sx={seriesComponentTitle}
            >
              {`${item?.series_type}: ${item?.article_title}`}
            </Typography>
            <Typography
              color="primary"
              sx={seriesComponentSubTitle} 
            >
              {item.article_subtitle}
            </Typography>
            <Typography
              color="primary"
              sx={seriesComponentdate}
            >
              {formatDate(item.published_date)}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SeriesComponent;
