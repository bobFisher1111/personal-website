import React, { useRef } from 'react';
import {
  Grid,
  Divider,
} from "@mui/material";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import AlignGrid from "../../themes/StyledGrids";
import { useSelector } from 'react-redux';
import SectionComponent from '../sectionComponent/SectionComponent';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';

const HomePageComponent = () => {
  const widthRef = useRef<any>();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData.articals;

  return (
    <Grid
      container
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        margin: 'auto',
        padding: '36px 24px 0px 24px',
      }}
    >
      <HeaderComponent
        title='React2Python'
        backgroundColor='white'
        fontColor='#2F4C69'
        lineHeight={'40px'}
        fontSize={'32px'}
        authorAvatar={false}
        headerTopPadding={true}
      />
      <AlignGrid
        ref={widthRef}
        container
        sx={{
          padding: '0px 0px 200px 0px',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            maxWidth: "1024px",
            margin: 'auto',
            padding: '16px 8px 0px 8px',
          }}
        >
          <Divider
            sx={{
              borderColor: '#282c34',
              padding: '16px 0px px 0px',
            }}
          />
        </Grid>
        <SectionComponent
          homePage={true}
        />
          <TabsComponent
            turnOnSectionTabsPadding={true}
            tabsData={HomePageComponentTabData(false, articalData)}
          />
      </AlignGrid>
    </Grid> 
  );
}

export default HomePageComponent;
