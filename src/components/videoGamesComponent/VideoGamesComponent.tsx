import { useSelector } from 'react-redux';
import SectionsComponent from '../../components/sections/SectionsComponent';
import VideoGamesComponentTabData from './VideoGamesComponentTabData';

const VideoGamesComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;

  const articalSectionFilter = articalData?.articals?.filter((item: any) => {
    return item.section === 'Video Games';
  });

  return (
      <SectionsComponent
        headerTitle='Video Games'
        backgroundColor='white'
        fontColor='#2F4C69'
        sectionTabData={VideoGamesComponentTabData(false, articalSectionFilter)}
      />
  );
}

export default VideoGamesComponent;
