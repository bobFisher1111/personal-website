import React from 'react';
import {
  Grid,
} from '@mui/material';
import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import { useSelector } from 'react-redux';
import SectionComponent from '../sectionComponent/SectionComponent';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
} from './HomePageComponentStyles';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData.articals;

  return (
    <Grid
      container
      sx={GridRoot}
    >
      <HeaderComponent
        title='WebsiteName'
        authorAvatar={false}
      />
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
          tabsData={HomePageComponentTabData(false, articalData)}
        />
      </Grid>
    </Grid> 
  );
};

export default HomePageComponent;
