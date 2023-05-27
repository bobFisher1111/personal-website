import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Section from '../../components/sections/Section';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const VideoGamesPage = () => {
  const ArticalDate = moment().format('ll');
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articalData = getWebsiteData && getWebsiteData;

  return (
      <Section
        headerTitle='Video Games'
        backgroundColor='white'
        fontColor='#2F4C69'
        title="Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"
        category={"Category"}
        categoryColor={"#2F4C69"}
        cardTextWidth={'703px'}
        turnOnExtraTab={false}
        tabNameOne={'Articals'}
        tabNameTwo={'Retro'}
        tabNameThree={'Modern'}
        tabNameFour={'Series'}
        oneLayerOfTabs={false}
        websiteData={articalData}
      />
  );
}

export default VideoGamesPage;
