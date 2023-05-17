import React from 'react';
import moment from 'moment';
import Section from '../../components/sections/Section';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const ShowsMoviesPage = () => {
  const ArticalDate = moment().format('ll');
  return (
      <Section
        headerTitle='Shows & Movies'
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
        tabNameTwo={'Movies'}
        tabNameThree={'Shows'}
        tabNameFour={'Series'}
        oneLayerOfTabs={false}
      />
  );
}

export default ShowsMoviesPage;
