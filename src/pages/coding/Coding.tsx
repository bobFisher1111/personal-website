import React from 'react';
import moment from 'moment';
import Section from '../../components/sections/Section';
import foxGirl from '../../assets/images/foxGirl.png';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const Coding = () => {
  const ArticalDate = moment().format('ll');
  return (
    <>
      <Section
        headerTitle='Coding'
        backgroundColor='white' // #2F4C69 // 282c34
        fontColor='#667A6E'
        img={finalfantasy7}
        title="Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"
        category={"Category"}
        categoryColor={"#2F4C69"}
        cardTextWidth={'703px'}
        date={ArticalDate}
      />
    </>
  );
}

export default Coding;
