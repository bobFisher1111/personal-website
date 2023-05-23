import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import GetWebsiteData from '../../features/webSiteData/GetWebsiteData';

import HomePageComponent from '../../components/homePageComponent/HomePageComponent';

const HomePage = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(GetWebsiteData())
  // }, []);
  return (
    <HomePageComponent />
  );
}

export default HomePage;
