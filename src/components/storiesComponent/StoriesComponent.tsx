import { useSelector } from 'react-redux';
import SectionsComponent from 'src/components/sections/SectionsComponent';
import StoriesComponentTabData from './StoriesComponentTabData';

const StoriesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state?.webSiteData?.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;
  const articleSectionFilter = articleData?.articles?.filter((item: any) => {
    return item.sections === 'Stories';
  });
  const articleShortStoriesFilter = articleData?.articles?.filter((item: any) => {
    return item.sectionType === 'Short Stories';
  });

  return (
    <SectionsComponent
      headerTitle='Stories'
      sectionTabData={StoriesComponentTabData(
        authorsData,
        articleSectionFilter,
        articleShortStoriesFilter,
      )}
    />
  );
};

export default StoriesComponent;
