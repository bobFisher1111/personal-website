import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import ShowsMoviesComponentTabData from './ShowsMoviesComponentTabData';

const ShowsMoviesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.section === 'Shows & Movies';
  });

  return (
      <SectionsComponent
        headerTitle='Shows & Movies'
        backgroundColor='white'
        fontColor='#2F4C69'
        sectionTabData={ShowsMoviesComponentTabData(false, articalSectionFilter)}
      />
  );
}

export default ShowsMoviesComponent;
