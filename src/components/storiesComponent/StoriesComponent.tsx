import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import StoriesComponentTabData from './StoriesComponentTabData';

const StoriesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state?.webSiteData?.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData;
  const articleSectionFilter = articleData?.articals?.filter((item: any) => {
    return item.sections === 'Stories';
  });

  return (
    <SectionsComponent
      headerTitle='Stories'
      sectionTabData={StoriesComponentTabData(
        false,
        articleSectionFilter,
      )}
    />
  );
};

export default StoriesComponent;
