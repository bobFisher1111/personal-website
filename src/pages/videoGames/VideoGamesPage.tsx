import React from 'react';
import moment from 'moment';
import Section from '../../components/sections/Section';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const VideoGamesPage = () => {
  const ArticalDate = moment().format('ll');
  return (
      <Section
        headerTitle='Video Games'
        backgroundColor='white'
        fontColor='#2F4C69'
        img={finalfantasy7}
        title="Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"
        category={"Category"}
        categoryColor={"#2F4C69"}
        cardTextWidth={'703px'}
        date={ArticalDate}
        turnOnExtraTab={false}
        tabNameOne={'Articals'}
        tabNameTwo={'Retro'}
        tabNameThree={'Modern'}
        tabNameFour={'Series'}
        oneLayerOfTabs={false}
      />
  );
}

export default VideoGamesPage;
