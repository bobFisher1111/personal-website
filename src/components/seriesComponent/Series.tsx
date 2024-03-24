import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Grid,
  Button,
  Typography,
} from '@mui/material';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import VerticalArticalCardComponent from '../cards/articalCards/verticalCard/VerticalArticalCardComponent';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  GridMarginLeft,
  GridSeriesReadMoreMargin,
  GridSeriesArticalList,
  GridSeriesRoot,
  TypographySeriesArticalDate,
  TypographySeriesArticalSubTitle,
  TypographySeriesArticalTitle,
  TypographySeriesTitle,
} from './SeriesStyle';

export const Series: React.FC<Props> = ({
  data, 
  name,
  articalPage,
  section,
  homePage,
  seriesForAuthorsPage,
}) => {
  const [filterSeries, setFilterSeries] = useState<any>([]);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const series = getWebsiteData && getWebsiteData?.websiteData?.series;

  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[1];
    return (getIdFromCurrentLocation);
  };

  const newNonImmutableArray = series?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    const date1: any = new Date(a.seriesStartDate);
    const date2: any = new Date(b.seriesStartDate);
    return date2 - date1;
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
    return seriesList;
  });

  const filteredSeriesList = createSeriesList && createSeriesList?.filter((value: any) => Object.keys(value).length !== 0);
  
  const seriesFilter = sortByDate?.filter((item: any) => {
    return item.section === section;
  });

  const seriesAuhtorFilterArticalPage = sortByDate?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });

  const seriesAuhtorFilterAuthorPage = sortByDate?.filter((item: any) => {
    return item.authorId === name;
  });

  useEffect(() => {
    if (section !== undefined) {
      setFilterSeries(seriesFilter);
    } 
    if (articalPage) {
      setFilterSeries(seriesAuhtorFilterArticalPage);
    }
    if (seriesForAuthorsPage) {
      setFilterSeries(seriesAuhtorFilterAuthorPage);
    }
    if (homePage) {
      setFilterSeries(sortByDate);
    }
  }, []);
  
  const noSeries = filteredSeriesList?.length === 0;

  const textLoop = (item: any, index: number) => {
    return filteredSeriesList[index]?.slice(0, 4).filter(() => {
      return item.seriesId === item.seriesId;
    })
      .map((a: any, i: number) => {
        if(item.seriesId === a.seriesId) {
          const seriesTitle = `${a.seriesType} ${i + 1}: ${a?.articalTitle}`;
          return (
            <Grid
              container
              key={a.id}
              sx={GridSeriesArticalList}
            >
              <Link to={`/artical/${a?.authorId}/${a?.articalId}`}
                style={LinkStyles()}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Typography
                    sx={TypographySeriesArticalTitle}
                  >
                    {seriesTitle}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Typography
                    sx={TypographySeriesArticalSubTitle}
                  >
                    { a.articalSubTitle}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Typography
                    sx={TypographySeriesArticalDate}
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
          {!articalPage && 
                <Grid
                  container
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={GridMarginLeft}
                  >
                    <Typography
                      sx={TypographySeriesTitle}
                    >
                      {`${item?.section}: ${item?.seriesTitle}`}
                    </Typography>
                  </Grid>
                </Grid>
          }
          { articalPage ?
            <>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  xs={8}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                >
                  <VerticalArticalCardComponent
                    key={index}
                    name={item.seriesAuthors}
                    articalData={item}
                    series={true}
                  />
                </Grid>
              </Grid>
            </>
            :
            <>
              <Grid
                item
                xs={7}
                sm={5}
                md={4}
                lg={4}
                xl={4}
                sx={GridMarginLeft}
              >
                <VerticalArticalCardComponent
                  key={index}
                  name={item.seriesAuthors}
                  articalData={item}
                  series={true}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={7}
                xl={7}
                sx={GridMarginLeft}
              >
                {textLoop(item, index)}
                { (filteredSeriesList[index]?.length / 4) >= 1 && 
                    <Grid
                      container
                      sx={GridSeriesReadMoreMargin}
                    >
                      <Link to={`/series/${item.seriesId}`}
                        style={LinkStyles()}
                      >
                        <Button 
                          variant="outlined"
                          sx={{
                            color: 'black',
                          }}
                        >
                          Read More
                        </Button>
                      </Link>
                    </Grid>
                }
              </Grid>
            </>
          }
        </Grid>
      ))}
    </>
  );
};
  
export type Props = {
    data: any;
    name?: string;
    articalPage?: boolean;
    section?: string;
    homePage?: boolean;
    seriesForAuthorsPage?: boolean;
  };

export default Series;
  