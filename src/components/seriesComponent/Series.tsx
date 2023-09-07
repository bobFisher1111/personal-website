import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
} from "@mui/material";
import ComingSoon from "../comingSoon/ComingSoon";
import VerticalArticalCardComponent from "../cards/articalCards/verticalCard/VerticalArticalCardComponent";
import { LinkStyles } from '../../styles/LinkStyles';
import { 
  GridSeriesArticalList,
  GridSeriesRoot,
  GridMarginLeft,
  GridAlignItemSeries,
  GridPageWidth,
  GridSeriesReadMoreMargin,
} from '../../styles/GridStyles';
import {
  TypographySeriesArticalTitle,
  TypographySeriesArticalSubTitle,
  TypographySeriesArticalDate,
  TypographySeriesTitle,
} from '../../styles/TypographyStyles';

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
    const series = getWebsiteData && getWebsiteData;


    const getIdFromUrl = () => {
      const currentLocation = window.location.href;
      const getIdFromCurrentLocation = currentLocation.split("/").reverse()[1];
      return (getIdFromCurrentLocation);
    }

    const newNonImmutableArray = series?.series?.map((item: any) => item);
    const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
      const date1: any = new Date(a.seriesStartDate);
      const date2: any = new Date(b.seriesStartDate);
      return date2 - date1;
    });

    const seriesData = data?.filter((series: any) => series.series === true);
    const createSeriesList = sortByDate?.map((x: any) => {
      const seriesList = seriesData?.filter((item: any) => {
          let sL: any = [];
          if (item?.seriesId ===  x?.seriesId) {
            return sL.push(x);
          }
        }
      )
      return seriesList
    });

    const filteredSeriesList = createSeriesList.filter((value: any) => Object.keys(value).length !== 0);
  
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
    }, [])
  
    const noSeries = filteredSeriesList.length === 0;

    const textLoop = (item: any, index: number) => {
        return filteredSeriesList[index]?.slice(0, 4).filter((n: any, ip: number) => {
          return item.seriesId === item.seriesId;
        })
        .map((a: any, i: number) => {
              if(item.seriesId === a.seriesId) {
              const seriesTitle = `${a.seriesType} ${i + 1}: ${a?.articalTitle}`;
              return (
                  <GridSeriesArticalList
                      container
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
                        <TypographySeriesArticalTitle>
                          {seriesTitle}
                        </TypographySeriesArticalTitle>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                      >
                    <TypographySeriesArticalSubTitle>
                      { a.articalSubTitle}
                    </TypographySeriesArticalSubTitle>
                   </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                      >
                    <TypographySeriesArticalDate>
                      { a.publishedDate}
                    </TypographySeriesArticalDate>
                  </Grid>
                  </Link>
                </GridSeriesArticalList>
              )
          }
        })
    }

    return (
        <>
        {noSeries && 
          <ComingSoon />
        }
        {filterSeries.map((item: any, index: any) => (
              <GridSeriesRoot
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
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
                    <TypographySeriesTitle>
                      {`${item?.section}: ${item?.seriesTitle}`}
                    </TypographySeriesTitle>
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
                  { (filteredSeriesList[index].length / 4) >= 1 && 
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
            </GridSeriesRoot>
            ))}
         </>
      )
  }
  
  export type Props = {
    data: any;
    name?: string;
    articalPage?: boolean;
    section?: string;
    homePage?: boolean;
    seriesForAuthorsPage?: boolean;
  };

  export default Series;
  