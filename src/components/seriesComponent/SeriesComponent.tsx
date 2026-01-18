import { useId } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import HorizontalArticleCardComponent from '../cards/articleCards/horizontalCard/HorizontalArticleCardComponent';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  seriesComponentGridRoot,
  seriesComponentGridArticleInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentDate,
} from './SeriesComponentStyles';

const SeriesComponent = () => {
  const id = useId();
  const theme = useTheme();
  const colorTheme = useSelector((state: any) => state.theme.darkTheme);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const seriesData = getWebsiteData;

  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split('/').reverse()[0];
    return Number(seriesId);
  };

  const getSeriesFromId = seriesData?.series?.filter(
    (item: any) => item.series_id === getSeriesIdFromUrl()
  );

  const getSeriesArticles = seriesData?.articles?.filter(
    (item: any) => item.series_id === getSeriesIdFromUrl()
  );

  const seriesInfo = getSeriesFromId?.[0];
  const noArticles = getSeriesArticles?.length === 0;

  const sortSeriesList = getSeriesArticles?.sort(
    (a: any, b: any) => a.article_id - b.article_id
  );

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignContent="center"
      sx={seriesComponentGridRoot()}
    >
      <Grid size={12}>
        <HorizontalArticleCardComponent
          author={seriesInfo?.series_authors}
          date={formatDate(seriesInfo?.series_start_date)}
          imageWidth="780px"
          articlePage={true}
          useVideoInsteadOfImage={seriesInfo?.use_video_instead_of_image}
          authorsId={seriesInfo?.author_id}
          videoOrImageCover={seriesInfo?.series_cover_image_or_video}
          section={seriesInfo?.section}
          mobileImageWidth="30px"
          videoHeight={true}
        />
      </Grid>

      {noArticles && <ComingSoon />}

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
          sx={seriesComponentGridArticleInfo(theme)}
        >
          <Link
            to={`/article/${item?.author_id}/${item?.article_id}`}
            style={LinkStyles(colorTheme)}
          >
            <Typography color="primary" sx={seriesComponentTitle(theme)}>
              {`${item?.series_type}: ${item?.article_title}`}
            </Typography>
            <Typography color="primary" sx={seriesComponentSubTitle(theme)}>
              {item.article_subtitle}
            </Typography>
            <Typography color="primary" sx={seriesComponentDate(theme)}>
              {formatDate(item.published_date)}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SeriesComponent;
