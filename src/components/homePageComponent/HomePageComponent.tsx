import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
// import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import { useSelector } from 'react-redux';
import { websiteHomePageImage } from '../../config';
import SectionComponent from '../sectionComponent/SectionComponent';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
  HeaderTitleStyles,
  HomePageImage,
} from './HomePageComponentStyles';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;

  return (
    <Grid
      container
      sx={GridRoot}
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
          sx={HeaderTitleStyles}
        >
          {"Gamers Shrine"}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent='center'
        alignItems="center"
        sx={HomePageImage}
        // sx={GridAlignItems}
      >
        <img
          src={websiteHomePageImage}
          alt={'home page image'}
          loading="lazy"
        />
      </Grid>
      <Grid
        container
        justifyContent='flex-start'
        alignItems="center"
        sx={GridAlignItems}
      >
        <SectionComponent
          homePage={true}
        />
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={HomePageComponentTabData(false, articleData)}
        />
      </Grid>
    </Grid> 
  );
};

export default HomePageComponent;
