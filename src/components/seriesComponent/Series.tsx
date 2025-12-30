import React, { useId } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import VerticalArticleCardComponent from '../cards/articleCards/verticalCard/VerticalArticleCardComponent';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  GridMarginLeft,
  GridSeriesReadMoreMargin,
  GridSeriesArticleList,
  GridSeriesRoot,
  TypographySeriesArticleDate,
  TypographySeriesArticleSubTitle,
  TypographySeriesArticleTitle,
  TypographySeriesTitle,
} from './SeriesStyle';

export const Series = ({
  data, 
  name,
  section,
  homePage,
  seriesForAuthorsPage,
}: Props) => {
  const id = useId();
  const theme = useTheme();
  const colorTheme = useSelector((state: any) => state.theme.darkTheme);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const series = getWebsiteData?.series;

  const sortByDate = series
    ?.map((item: any) => item)
    ?.sort((a: any, b: any) => b.series_id - a.series_id);

  const seriesData = data?.filter((series: any) => series?.series_id !== null);

  const createSeriesList = sortByDate?.map((x: any) => {
    const seriesList = seriesData?.filter((item: any) => item?.series_id === x?.series_id);
    return seriesList?.sort((a: any, b: any) => b.article_id - a.article_id);
  });

  const filteredSeriesList = createSeriesList?.filter((value: any) => value?.length);

  const seriesFilter = sortByDate?.filter((item: any) => item.section === section);
  const seriesAuthorFilterAuthorPage = sortByDate?.filter((item: any) => item.author_id === name);

  // Compute filtered series based on props
  const getFilterSeries = () => {
    if (section !== undefined) {
      return seriesFilter || [];
    } 
    if (seriesForAuthorsPage) {
      return seriesAuthorFilterAuthorPage || [];
    }
    if (homePage) {
      return sortByDate || [];
    }
    return [];
  };

  const filterSeries = getFilterSeries();

  const noSeries =
    (seriesAuthorFilterAuthorPage?.length ?? 0) === 0 &&
    (filteredSeriesList?.length ?? 0) === 0 &&
    (seriesFilter?.length ?? 0) === 0;

  const textLoop = (item: any, index: number) => {
    return filteredSeriesList?.[index]?.slice(0, 4).map((a: any, i: number) => {
      const seriesTitle = `${a.series_type}: ${a.article_title}`;
      return (
        <Grid container key={i} sx={GridSeriesArticleList(theme)}>
          <Link to={`/article/${a.author_id}/${a.article_id}`} style={LinkStyles(colorTheme)}>
            <Grid size={12}>
              <Typography color="primary" sx={TypographySeriesArticleTitle(theme)}>
                {seriesTitle}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography color="primary" sx={TypographySeriesArticleSubTitle(theme)}>
                {a.article_subtitle}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography color="primary" sx={TypographySeriesArticleDate(theme)}>
                {formatDate(a.published_date)}
              </Typography>
            </Grid>
          </Link>
        </Grid>
      );
    });
  };

  return (
    <>
      {noSeries && <ComingSoon />}
      {filterSeries?.map((item: any, index: number) => (
        <Grid
          container
          key={`${id}-${index}`}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={GridSeriesRoot}
        >
          <Grid container size={12} sx={GridMarginLeft(theme)}>
            <Typography color="primary" sx={TypographySeriesTitle(theme)}>
              {`${item.section}: ${item.series_title}`}
            </Typography>
          </Grid>
          <Grid container>
            <Grid sx={GridMarginLeft(theme)}>
              <VerticalArticleCardComponent
                key={`${id}-${index}`}
                name={item.series_authors}
                articleData={item}
                series
                isOnArticlePage={false}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 7,
                lg: 7,
                xl: 7,
              }}
              sx={GridMarginLeft(theme)}
            >
              {textLoop(item, index)}
              {(filteredSeriesList?.[index]?.length ?? 0) >= 4 && (
                <Grid container sx={GridSeriesReadMoreMargin(theme)}>
                  <Link to={`/series/${item.series_id}`} style={LinkStyles(colorTheme)}>
                    <Button variant="outlined">Read More</Button>
                  </Link>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export type Props = {
  data: any;
  name?: string;
  section?: string;
  homePage?: boolean;
  seriesForAuthorsPage?: boolean;
};

export default Series;
