import React, { useRef } from 'react';
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import { useSelector } from 'react-redux';
import SectionComponent from '../sectionComponent/SectionComponent';
import HomePageComponentTabData from './HomePageComponentTabData';
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  GridAlignItems,
  GridRoot,
  GridPageWidth,
} from '../../styles/GridStyles';
import { DividerForHeader } from '../../styles/DividerStyles';

const HomePageComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData.articals;

  return (
    <GridRoot
      container
    >
      <HeaderComponent
        title='React2Python'
        authorAvatar={false}
      />
      <GridAlignItems
        container
        justifyContent='flex-start'
        alignItems="center"
      >
        <GridPageWidth
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <DividerForHeader/>
      </GridPageWidth>
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
