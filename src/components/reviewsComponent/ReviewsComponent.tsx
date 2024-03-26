import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../sections/SectionsComponent';
import ShowsMoviesComponentTabData from './ReviewsComponentTabData';

const ReviewsComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData;

  const articleSectionFilter = articleData?.articles?.filter((item: any) => {
    return item.sections === 'Reviews';
  });

  const articleModernReviewsFilter = articleSectionFilter?.filter((item: any) => {
    return item.sectionType === 'Modern Reviews';
  });

  const articleRetroReviewsFilter = articleSectionFilter?.filter((item: any) => {
    return item.sectionType === 'Retro Reviews';
  });

  return (
    <SectionsComponent
      headerTitle='Reviews'
      sectionTabData={ShowsMoviesComponentTabData(
        false,
        articleSectionFilter,
        articleModernReviewsFilter,
        articleRetroReviewsFilter,
      )}
    />
  );
};

export default ReviewsComponent;
