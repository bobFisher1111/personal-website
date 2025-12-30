import React from 'react';
import SectionsComponent from '../sections/SectionsComponent';
import { useSelector } from 'react-redux';
import CodingComponentTabData from './CodingComponentTabData';

const CodingComponent: React.FC = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;

  const articleSectionFilter = articleData?.filter((item: any) => {
    return item.sections === 'Coding';
  });

  const articleFrontEndFilter = articleData?.filter((item: any) => {
    return item.sectionType === 'Full Stack';
  });

  const articleDataFilter = articleData?.filter((item: any) => {
    return item.sectionType === 'Game Dev';
  });

  return (
    <SectionsComponent
      headerTitle='Coding'
      sectionTabData={CodingComponentTabData(
        authorsData,
        articleSectionFilter,
        articleFrontEndFilter,
        articleDataFilter,
      )}
    />
  );
};

export default CodingComponent;
