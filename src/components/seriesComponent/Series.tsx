import React, { useEffect, useId, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import {
  Button,
  Grid,
  Typography,
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

export const Series: React.FC<Props> = ({
  data, 
  name,
  articlePage,
  section,
  homePage,
  seriesForAuthorsPage,
}) => {
  const [filterSeries, setFilterSeries] = useState<any>([]);
  const id = useId();
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const series = getWebsiteData?.series;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[1];
    return Number(getIdFromCurrentLocation);
  };
  const newNonImmutableArray = series?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    return b.series_id - a.series_id;
  });

  const seriesData = data && data?.filter((series: any) => series?.series_id !== null);
  const createSeriesList = sortByDate?.map((x: any) => {
    const seriesList = seriesData?.filter((item: any) => {
      const sL: any = [];
      if (item?.series_id ===  x?.series_id) {
        return sL.push(x);
      }
    });
    const sortSeriesList = seriesList.sort((a: any, b: any) => {
      return b.article_id - a.article_id;
    });
    return sortSeriesList;
  });

  const filteredSeriesList = createSeriesList && createSeriesList?.filter((value: any) => Object.keys(value).length !== 0);
  
  const seriesFilter = sortByDate?.filter((item: any) => {
    return item.section === section;
  });

  const seriesAuhtorFilterArticlePage = sortByDate?.filter((item: any) => {
    return item.author_id === getIdFromUrl();
  });

  const seriesAuhtorFilterAuthorPage = sortByDate?.filter((item: any) => {
    return item.author_id === name;
  });

  useEffect(() => {
    if (section !== undefined) {
      setFilterSeries(seriesFilter);
    } 
    if (articlePage) {
      setFilterSeries(seriesAuhtorFilterArticlePage);
    }
    if (seriesForAuthorsPage) {
      setFilterSeries(seriesAuhtorFilterAuthorPage);
    }
    if (homePage) {
      setFilterSeries(sortByDate);
    }
  }, []);
  const noSeries = seriesAuhtorFilterAuthorPage?.length === 0 && filteredSeriesList?.length === 0 && seriesFilter?.length === 0 && seriesAuhtorFilterArticlePage?.length === 0;
  // there is a bug here if create series with no article tied to it, will not show articles on left
  const textLoop = (item: any, index: number) => {
    return (filteredSeriesList[index])?.slice(0, 4).filter(() => {
      return item.series_id === item.series_id;
    })
      .map((a: any, index: number) => {
        if(item.series_id) {
          const seriesTitle = `${a.series_type}: ${a?.article_title}`;
          return (
            <Grid
              container
              key={index}
              sx={GridSeriesArticleList}
            >
              <Link to={`/article/${a?.author_id}/${a?.article_id}`}
                style={LinkStyles(theme)}
              >
                <Grid
                  size={12}
                >
                  <Typography
                    color="primary"
                    sx={TypographySeriesArticleTitle}
                  >
                    {seriesTitle}
                  </Typography>
                </Grid>
                <Grid
                  size={12}
                >
                  <Typography
                    color="primary"
                    sx={TypographySeriesArticleSubTitle}
                  >
                    { a.article_subtitle}
                  </Typography>
                </Grid>
                <Grid
                  size={12}
                >
                  <Typography
                    color="primary"
                    sx={TypographySeriesArticleDate}
                  >
                    {formatDate(a.published_date)}
                  </Typography>
                </Grid>
              </Link>
            </Grid>
          );
        }
      });
  };

  return (
    <>
      {noSeries && 
          <ComingSoon />
      }
      {filterSeries?.map((item: any, index: any) => (
        <Grid
          container
          key={`${id}-${index}`}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={GridSeriesRoot}
        >
          {!articlePage && 
            <Grid
              container
              size={12}
              sx={GridMarginLeft}
            >
              <Typography
                color="primary"
                sx={TypographySeriesTitle}
              >
                {`${item?.section}: ${item?.series_title}`}
              </Typography>
            </Grid>
          }
          <Grid
            container
          >
            <Grid
              sx={GridMarginLeft}
            >
              <VerticalArticleCardComponent
                key={`${id}-${index}`}
                name={item.series_authors}
                articleData={item}
                series={true}
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
              sx={GridMarginLeft}
            >
              {textLoop(item, index)}
              { (filteredSeriesList[index]?.length / 4) >= 1 && 
                  <Grid
                    container
                    sx={GridSeriesReadMoreMargin}
                  >
                    <Link to={`/series/${item.series_id}`}
                      style={LinkStyles(theme)}
                    >
                      <Button 
                        variant="outlined"
                      >
                        Read More
                      </Button>
                    </Link>
                  </Grid>
              }
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
    articlePage?: boolean;
    section?: string;
    homePage?: boolean;
    seriesForAuthorsPage?: boolean;
  };

export default Series;
  