import React from 'react';
import SectionsComponent from '../sections/SectionsComponent';
import { useSelector } from 'react-redux';
import CodingComponentTabData from './CodingComponentTabData';

const CodingComponent: React.FC = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;

  const articleSectionFilter = articleData?.filter((item: any) => {
    return item.sections === 'Coding';
  });

  const articleFrontEndFilter = articleData?.filter((item: any) => {
    return item.sectionType === 'Front End';
  });

  // const articleBackEndFilter = articleData?.articles?.filter((item: any) => {
  //   return item.sectionType === 'Back End';
  // });

  const articleDataFilter = articleData?.filter((item: any) => {
    return item.sectionType === 'Data';
  });

  return (
    <SectionsComponent
      headerTitle='Coding'
      sectionTabData={CodingComponentTabData(
        false,
        articleSectionFilter,
        articleFrontEndFilter,
        articleDataFilter,
      )}
    />
  );
};

export default CodingComponent;
