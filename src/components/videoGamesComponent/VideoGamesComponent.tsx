import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import VideoGamesComponentTabData from './VideoGamesComponentTabData';

const VideoGamesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData?.websiteData;

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.sections === 'Video Games';
  });

  const articalModernFilter = articalData?.articals?.filter((item: any) => {
    return item.sectionType === 'Modern Video Games';
  });

  const articalRetroFilter = articalData?.articals?.filter((item: any) => {
    return item.sectionType === 'Retro Video Games';
  });
  
  return (
    <SectionsComponent
      headerTitle='Video Games'
      sectionTabData={VideoGamesComponentTabData(
        false,
        articalSectionFilter,
        articalModernFilter,
        articalRetroFilter,
      )}
    />
  );
};

export default VideoGamesComponent;
