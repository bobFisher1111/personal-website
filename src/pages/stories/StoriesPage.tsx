import React from 'react';
import moment from 'moment';
import Section from '../../components/sections/Section';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const StoriesPage = () => {
  const ArticalDate = moment().format('ll');
  return (
      <Section
        headerTitle='Stories'
        backgroundColor='white'
        fontColor='#2F4C69'
        img={finalfantasy7}
        title="Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"
        category={"Category"}
        categoryColor={"#2F4C69"}
        cardTextWidth={'703px'}
        date={ArticalDate}
        turnOnExtraTab={true}
        tabNameOne={'Latest Stories'}
        tabNameTwo={'All Stories'}
        tabNameThree={'Popular Stories'}
        tabNameFour={'Series'}
        oneLayerOfTabs={true}
      />
  );
}

export default StoriesPage;
