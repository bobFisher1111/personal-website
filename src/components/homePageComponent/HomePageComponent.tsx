import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { websiteHomePageImage } from '../../config';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
  HeaderTitleStyles,
  HomePageImage,
} from './HomePageComponentStyles';
import SectionsComponent from '../sectionsComponent/SectionsComponent';
import { styled } from '@mui/material/styles';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;

  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });


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
          color="primary"
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
      >
        <Img
          src={websiteHomePageImage}
          alt={'home page image'}
          loading="lazy"
          style={{
            width: '1080px',
          }}
        />
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
