import React from 'react';
import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import ShowsMoviesComponentTabData from './ShowsMoviesComponentTabData';

const ShowsMoviesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.section === 'Shows & Movies';
  });

  const articalAnimeFilter = articalSectionFilter?.filter((item: any) => {
    return item.sectionType === 'Anime';
  });

  const articalMoviesFilter = articalSectionFilter?.filter((item: any) => {
    return item.sectionType === 'Movies';
  });

  return (
    <SectionsComponent
      headerTitle='Shows & Movies'
      sectionTabData={ShowsMoviesComponentTabData(
        false,
        articalSectionFilter,
        articalAnimeFilter,
        articalMoviesFilter,
      )}
    />
  );
};

export default ShowsMoviesComponent;
