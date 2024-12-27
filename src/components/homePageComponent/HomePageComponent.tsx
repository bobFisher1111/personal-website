import React, { useState } from 'react';
import {
  Button,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import ArticleList from '../articleList/ArticleList';
import {
  GridRoot,
  LatestTextStyles,
  SeriesIconStyles,
  SeriesButtonStyles,
  SeriesTextStyles,
} from './HomePageComponentStyles';
import SeriesComponent from '../seriesList/SeriesComponent';
import Sections from './Sections';

const HomePageComponent: React.FC = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const [numOfSeriesDisplayed, SetNumOfSeriesDisplayed] = useState<number>(4);
  const [seriesExpanded, SetSeriesExpanded] = useState<boolean>(false);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;
  const seriesData = getWebsiteData && getWebsiteData?.websiteData?.series;

  const [data, setData] = useState<any>(articleData);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems="center"
      sx={GridRoot}
    >
      <Grid
        size={12}
      >
        <Sections data={articleData} setData={setData} />
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
        <SeriesComponent series={seriesData?.slice(0, numOfSeriesDisplayed)} />
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
