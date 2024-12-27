import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
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
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const series = getWebsiteData && getWebsiteData?.websiteData?.series;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[1];
    return Number(getIdFromCurrentLocation);
  };
  const newNonImmutableArray = series?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    return b.seriesId - a.seriesId;
  });

  const seriesData = data && data?.filter((series: any) => series?.series === true);
  const createSeriesList = sortByDate?.map((x: any) => {
    const seriesList = seriesData?.filter((item: any) => {
      const sL: any = [];
      if (item?.seriesId ===  x?.seriesId) {
        return sL.push(x);
      }
    }
    );
    const sortSeriesList = seriesList.sort((a: any, b: any) => {
      return b.articleId - a.articleId;
    });
    return sortSeriesList;
  });

  const filteredSeriesList = createSeriesList && createSeriesList?.filter((value: any) => Object.keys(value).length !== 0);
  
  const seriesFilter = sortByDate?.filter((item: any) => {
    return item.section === section;
  });

  const seriesAuhtorFilterArticlePage = sortByDate?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });

  const seriesAuhtorFilterAuthorPage = sortByDate?.filter((item: any) => {
    return item.authorId === name;
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
  const textLoop = (item: any, index: number) => {
    return (filteredSeriesList[index])?.slice(0, 4).filter(() => {
      return item.seriesId === item.seriesId;
    })
      .map((a: any) => {
        if(item.seriesId === a.seriesId) {
          const seriesTitle = `${a.seriesType}: ${a?.articleTitle}`;
          return (
            <Grid
              container
              key={a.id}
              sx={GridSeriesArticleList}
            >
              <Link to={`/article/${a?.authorId}/${a?.articleId}`}
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
                    { a.articleSubTitle}
                  </Typography>
                </Grid>
                <Grid
                  size={12}
                >
                  <Typography
                    color="primary"
                    sx={TypographySeriesArticleDate}
                  >
                    {formatDate(a.publishedDate)}
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
          key={item.id}
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
                {`${item?.section}: ${item?.seriesTitle}`}
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
                key={index}
                name={item.seriesAuthors}
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
                    <Link to={`/series/${item.seriesId}`}
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
  