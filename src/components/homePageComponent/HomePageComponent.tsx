import React from 'react';
import {
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
  HomePageImage,
} from './HomePageComponentStyles';
import SectionsComponent from '../sectionsComponent/SectionsComponent';
import CarouselComponent from '../carousel/CarouselComponent';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;

  return (
    <Grid
      container
      sx={GridRoot}
    >
      <Grid
        container
        justifyContent='center'
        alignItems="center"
        sx={HomePageImage}
      > 
        <CarouselComponent author={authorsData} articles={articleData} />
      </Grid>
      <Grid
        container
        justifyContent='flex-start'
        alignItems="center"
        sx={GridAlignItems}
      >
        <SectionsComponent />
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={HomePageComponentTabData(authorsData, articleData, false)}
        />
      </Grid>
    </Grid> 
  );
};

export default HomePageComponent;
