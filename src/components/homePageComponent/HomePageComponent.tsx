import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import ArticleList from '../articleList/ArticleList';
import {
  GridAlignItems,
  GridRoot,
  HomePageImage,
  LatestTextStyles,
  SeriesIconStyles,
  SeriesButtonStyles,
  SeriesGridStyles,
  SeriesTextStyles,
} from './HomePageComponentStyles';
import SectionsComponent from '../sectionsComponent/SectionsComponent';
import CarouselComponent from '../carousel/carouselArticles/CarouselComponent';
import SeriesComponent from '../seriesList/SeriesComponent';

const HomePageComponent = () => {
  const [numOfSeriesDisplayed, SetNumOfSeriesDisplayed] = useState<number>(4);
  const [seriesExpanded, SetSeriesExpanded] = useState<boolean>(false);
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;
  const seriesData = getWebsiteData && getWebsiteData?.websiteData?.series;

  return (
    <Grid
      container
      sx={GridRoot}
    >
      {/* <SectionsComponent /> */}
      <Grid
        item
        container
        justifyContent='center'
        alignItems="center"
        sx={HomePageImage}
      >
        <CarouselComponent author={authorsData} articles={articleData} />
      </Grid>
      <Grid
        item
        container
        justifyContent='flex-start'
        alignItems="center"
        sx={GridAlignItems}
      >
        <SectionsComponent />
        <Grid
          item
          xs={12}
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
            {!seriesExpanded ? 
              <AddIcon
                onClick={() => {
                  SetNumOfSeriesDisplayed(seriesData.length);
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
            }
          </Button>
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          alignItems="center"
          sx={SeriesGridStyles}
        >
          <SeriesComponent series={seriesData?.slice(0, numOfSeriesDisplayed)} />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            color="primary"
            sx={LatestTextStyles}
          >
            Latest
          </Typography>
          <ArticleList authorData={authorsData} data={articleData} turOnAuthorForArticle={false} />
        </Grid>
      </Grid>
    </Grid> 
  );
};

export default HomePageComponent;
