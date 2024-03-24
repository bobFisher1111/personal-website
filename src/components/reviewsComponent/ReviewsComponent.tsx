import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../sections/SectionsComponent';
import ShowsMoviesComponentTabData from './ReviewsComponentTabData';

const ReviewsComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData?.websiteData;

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.sections === 'Reviews';
  });

  const articalAnimeFilter = articalSectionFilter?.filter((item: any) => {
    return item.sectionType === 'Modern Reviews';
  });

  const articalMoviesFilter = articalSectionFilter?.filter((item: any) => {
    return item.sectionType === 'Retro Reviews';
  });

  return (
    <SectionsComponent
      headerTitle='Reviews'
      sectionTabData={ShowsMoviesComponentTabData(
        false,
        articalSectionFilter,
        articalAnimeFilter,
        articalMoviesFilter,
      )}
    />
  );
};

export default ReviewsComponent;
