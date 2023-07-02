import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
} from "@mui/material";
import ComingSoon from "../../utilities/ComingSoon";
import VerticalArticalCardComponent from "../cards/articalCards/verticalCard/VerticalArticalCardComponent";

export const Series: React.FC<Props> = ({
    data, 
    name,
    articalPage,
    section,
    authorPage,
    homePage,
    seriesForAuthorsPage,
  }) => {
    const [filterSeries, setFilterSeries] = useState<any>([]);
    const seriesTitleRef = useRef<any>();
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

    console.log('filterSeries', filterSeries);
    
    const textLoop = (item: any, index: number) => {
        return filteredSeriesList[index]?.slice(0, 4).filter((n: any, ip: number) => {
          return item.seriesId === item.seriesId;
        })
        .map((a: any, i: number) => {
              if(item.seriesId === a.seriesId) {
              const seriesTitle = `${a.seriesType} ${i + 1}: ${a?.articalTitle}`;
              return (
                  <Grid
                      container
                      sx={{
                        padding: '0px 0px 16px 0px',
                      }}
                    >
                      <Link to={`/artical/${a?.authorId}/${a?.articalId}`}
                        style={{
                          textDecoration: "none"
                        }}
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
                          sx={{
                            textAlign: 'fled-start',
                            color: '#2F4C69',
                            padding: '0px 0px 0px 16px',
                            fontSize:'20px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '1',
                            WebkitBoxOrient: 'vertical',
                          }}
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
                      sx={{
                        textAlign: 'fled-start',
                        color: '#667A6E',
                        padding: '0px 0px 0px 16px',
                        fontSize:'16px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                      }}
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
                      sx={{
                        textAlign: 'fled-start',
                        color: '#76468c',
                        padding: '0px 0px 0px 16px',
                        fontSize:'14px'
                      }}
                    >
                      { a.publishedDate}
                    </Typography>
                  </Grid>
                  </Link>
                </Grid>
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
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                  paddingTop:'10px',
                }}
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
                    sx={{
                      margin: '0px 0px 0px 16px'
                    }}
                  >
                  <Typography
                        ref={seriesTitleRef}
                        sx={{
                          textAlign: 'fled-start',
                          color: '#2F4C69',
                          padding: '16px 0px 16px 0px',
                          fontSize: '24px',
                          overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        }}
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
                  sx={{
                    paddingTop:'10px',
                  }}
                >
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    sx={{
                      margin: '16px 0px 16px 16px'
                    }}
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
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  sx={{
                    margin: '0px 0px 0px 16px'
                  }}
                >
                    <VerticalArticalCardComponent
                      key={index}
                      name={item.seriesAuthors}
                      articalData={item}
                      seriesCopyLink={`http://localhost:3000//series/${item.seriesId}`}
                      series={true}
                    />
                </Grid>
                <Grid
                  item
                  xs={7}
                  sm={7}
                  md={7}
                  lg={7}
                  xl={7}
                  sx={{
                    margin: '0px 0px 16px 16px',
                  }}
                >
                  {textLoop(item, index)}
                  { (filteredSeriesList[index].length / 4) >= 1 && 
                  <Grid
                    container
                    sx={{
                      padding: '0px 0px 0px 16px',
                    }}
                  >
                  <Button 
                    variant="outlined"
                    sx={{
                      color: 'black',
                    }}
                  >
                    <Link to={`/series/${item.seriesId}`}
                        style={{
                          textDecoration: "none"
                        }}
                     >
                      Read More
                    </Link>
                    </Button>
                    </Grid>
                  }
                </Grid>
                </>
                }
              </Grid>
            ))}
         </>
      )
  }
  
  export type Props = {
    data: any;
    name?: string;
    articalPage?: boolean;
    section?: string;
    authorPage?: boolean;
    homePage?: boolean;
    seriesForAuthorsPage?: boolean;
  };

  export default Series;
  