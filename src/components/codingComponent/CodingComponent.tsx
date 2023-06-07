import SectionsComponent from '../sections/SectionsComponent';
import { useSelector } from 'react-redux';
import CodingComponentTabData from './CodingComponentTabData'

const CodingComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.section === 'Coding';
  });

  return (
      <SectionsComponent
        headerTitle='Coding'
        backgroundColor='white'
        fontColor='#2F4C69'
        sectionTabData={CodingComponentTabData(false, articalSectionFilter)}
      />
  );
}

export default CodingComponent;
