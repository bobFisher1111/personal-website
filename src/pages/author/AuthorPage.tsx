import React from 'react';
import moment from 'moment';
import Section from '../../components/sections/Section';
import foxGirl from '../../assets/images/foxGirl.png';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import AuthorComp from '../../components/authorComponents/AuthorComp';

const AuthorPage = () => {
  const ArticalDate = moment().format('ll');
  return (
    <>
      <AuthorComp />
    </>
  );
}

export default AuthorPage;
