import SectionsComponent from '../sections/SectionsComponent';
import { useSelector } from 'react-redux';
import CodingComponentTabData from './CodingComponentTabData'

const CodingComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.section === 'Coding';
  });

  const articalFrontEndFilter = articalData?.articals?.filter((item: any) => {
    return item.sectionType === 'Front End';
  });

  // const articalBackEndFilter = articalData?.articals?.filter((item: any) => {
  //   return item.sectionType === 'Back End';
  // });

  const articalDataFilter = articalData?.articals?.filter((item: any) => {
    return item.sectionType === 'Data';
  });

  return (
      <SectionsComponent
        headerTitle='Coding'
        sectionTabData={CodingComponentTabData(
          false,
          articalSectionFilter,
          articalFrontEndFilter,
          // articalBackEndFilter,
          articalDataFilter,
        )}
      />
  );
}

export default CodingComponent;
