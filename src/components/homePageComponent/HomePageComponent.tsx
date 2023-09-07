import React, { useRef } from 'react';
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import { useSelector } from 'react-redux';
import SectionComponent from '../sectionComponent/SectionComponent';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
} from '../../styles/GridStyles';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData.articals;

  return (
    <GridRoot
      container
    >
      <HeaderComponent
        title='WebsiteName'
        authorAvatar={false}
      />
      <GridAlignItems
        container
        justifyContent='flex-start'
        alignItems="center"
      >
        <SectionComponent
          homePage={true}
        />
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={HomePageComponentTabData(false, articalData)}
        />
      </GridAlignItems>
    </GridRoot> 
  );
}

export default HomePageComponent;
