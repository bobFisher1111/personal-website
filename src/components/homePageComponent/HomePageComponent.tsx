import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
// import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import { useSelector } from 'react-redux';
import SectionComponent from '../sectionComponent/SectionComponent';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
  HeaderTitleStyles,
  HomePageImage,
} from './HomePageComponentStyles';
import foxShrineGamers from '../../assets/images/FoxGamer1.png';
// import foxLogo1 from '../../assets/logo/foxLogo1.png';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData?.websiteData?.articals;

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
          {"Gamer's Shrine"}
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
          src={foxShrineGamers}
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
          tabsData={HomePageComponentTabData(false, articalData)}
        />
      </Grid>
    </Grid> 
  );
};

export default HomePageComponent;
