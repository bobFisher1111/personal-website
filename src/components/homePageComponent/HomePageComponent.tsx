import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import ArticleList from '../articleList/ArticleList';
import Carousel from '../carouselComponent/Carousel';
import SeriesComponent from '../seriesList/SeriesComponent';
import {
  // CarouselGrid,
  GridRoot,
  LatestTextStyles,
  // SeriesIconStyles,
  SeriesButtonStyles,
  SeriesTextStyles,
} from './HomePageComponentStyles';
import Sections from './Sections';


const HomePageComponent: React.FC = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  // const [numOfSeriesDisplayed, SetNumOfSeriesDisplayed] = useState<number>(4);
  // const [seriesExpanded, SetSeriesExpanded] = useState<boolean>(false);
  const articleData = getWebsiteData && getWebsiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.authors;
  const seriesData = getWebsiteData && getWebsiteData?.series;
  const [data, setData] = useState<any>(articleData);
  const [series, setSeries] = useState<any>(seriesData);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems="center"
      sx={GridRoot}
    >
      {/* <Grid // breaking issue here
        sx={CarouselGrid}
      > */}
      <Carousel data={articleData} author={authorsData} />
      {/* </Grid> */}
      <Grid
        size={12}
      >
        <Sections data={articleData} series={seriesData} setData={setData} setSeries={setSeries} />
      </Grid>
      <Grid
        size={12}
      >
        <Button
          sx={SeriesButtonStyles}
        >
          <Typography
            color="primary"
            sx={SeriesTextStyles}
          >
            Series 
          </Typography>
          {/* {!seriesExpanded ? 
            <AddIcon
              onClick={() => {
                SetNumOfSeriesDisplayed(series.length);
                return SetSeriesExpanded(true);
              }}
              sx={SeriesIconStyles}
            /> 
            : 
            <RemoveIcon
              sx={SeriesIconStyles}
              onClick={() => {
                SetNumOfSeriesDisplayed(4);
                return SetSeriesExpanded(false);
              }}
            />
          } */}
        </Button>
        <SeriesComponent series={series?.slice(0, 4)} /> {/*  Come back later when redesign and fix this*/}
      </Grid>
      <Grid
        size={12}
      >
        <Typography
          color="primary"
          sx={LatestTextStyles}
        >
          Latest
        </Typography>
        <ArticleList authorData={authorsData} data={data} turOnAuthorForArticle={false} />
      </Grid> 
    </Grid>
  );
};

export default HomePageComponent;
