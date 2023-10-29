import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import StoriesComponentTabData from './StoriesComponentTabData';

const StoriesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;
  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.section === 'Stories';
  });

  return (
    <SectionsComponent
      headerTitle='Stories'
      sectionTabData={StoriesComponentTabData(
        false,
        articalSectionFilter,
      )}
    />
  );
};

export default StoriesComponent;
