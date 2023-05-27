import Section from '../../components/sections/Section';
import { useSelector } from 'react-redux';

const Coding = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;

  return (
      <Section
        headerTitle='Coding'
        backgroundColor='white'
        fontColor='#2F4C69'
        title="Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"
        category={"Category"}
        categoryColor={"#2F4C69"}
        cardTextWidth={'703px'}
        turnOnExtraTab={true}
        tabNameOne={'Articals'}
        tabNameTwo={'Front End'}
        tabNameThree={'Back End'}
        tabNameFour={'Data'}
        oneLayerOfTabs={false}
        websiteData={articalData}
      />
  );
}

export default Coding;
