import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import VideoGamesComponentTabData from './VideoGamesComponentTabData';

const VideoGamesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData;

  const articleSectionFilter = articleData?.articles?.filter((item: any) => {
    return item.sections === 'Video Games';
  });

  const articleModernFilter = articleData?.articles?.filter((item: any) => {
    return item.sectionType === 'Modern Video Games';
  });

  const articleRetroFilter = articleData?.articles?.filter((item: any) => {
    return item.sectionType === 'Retro Video Games';
  });
  
  return (
    <SectionsComponent
      headerTitle='Video Games'
      sectionTabData={VideoGamesComponentTabData(
        false,
        articleSectionFilter,
        articleModernFilter,
        articleRetroFilter,
      )}
    />
  );
};

export default VideoGamesComponent;
