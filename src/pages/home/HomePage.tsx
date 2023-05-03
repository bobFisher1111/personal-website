import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  Divider,
} from "@mui/material";
import moment from 'moment';
import FilteringComponent from "../../components/filteringComponent/FilteringComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import SubTitlesComponent from "../../components/subTitlesComponent/SubTitlesComponent";
import LatestArticalsComponent from "../../components/latestArticalComponent/LatestArticalsComponent";
import PopularArticalsComponent from "../../components/popularArticalsComponent/PopularArticalsComponent";
import AlignGrid from "../../themes/StyledGrids";
import Card from '../../components/sections/Card';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const HomePage = () => {
  const widthRef = useRef<any>();
  const [marginWidth, setMarginWidth] = useState<any>(widthRef);

  const ArticalDate = moment().format('ll');

  const updatedLeftMargin = () => {
    setMarginWidth(widthRef.current?.offsetLeft);
  }

  useEffect(() => {
    if (widthRef && widthRef.current) {
      setMarginWidth(widthRef.current.offsetLeft);
      window.addEventListener("resize", updatedLeftMargin);
    }
    return () => {
      if(widthRef && widthRef.current) {
        window.removeEventListener("resize", updatedLeftMargin);
      }
    }
  }, [marginWidth]);

  return (
    <Grid
      container
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        paddingBottom: '200px',
      }}
    >
      <HeaderComponent
        title='React2Python'
        backgroundColor='white' // #2F4C69 // 282c34
        fontColor='#667A6E'
        lineHeight={'40px'}
        fontSize={'32px'}
        authorAvatar={false}
      />
      <AlignGrid
        ref={widthRef}
        container
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            maxWidth: "1024px",
            margin: 'auto',
            padding: '16px 8px 0px 8px',
          }}
        >
          <Divider
            sx={{
              borderColor: '#282c34',
              padding: '16px 0px 0px 0px',
            }}
          />
        </Grid>
        <FilteringComponent
            category={[]}
            categoryColor={"#2F4C69"}
        />
       <SubTitlesComponent
          subtitle={'Sections'}
          fontColor='#2F4C69'
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          
        >
          <Card
            title={'final fantasy'}
            backgroundColor={'white'}
            fontColor={'#667A6E'}
            img={finalfantasy7}
            author={'Bob the Fisher'}
            likes={'5'}
            cardTextWidth={'250px'}
            date={ArticalDate}
            imageWidth={'200px'}
            articalPage={false}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          
        >
          <Card
            title='final fantasy'
            backgroundColor='white'
            fontColor='#667A6E'
            img={finalfantasy7}
            author='Bob the Fisher'
            likes='5'
            cardTextWidth={'250px'}
            date={ArticalDate}
            imageWidth={'200px'}
            articalPage={false}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          
        >
          <Card
            title={'final fantasy'}
            backgroundColor={'white'}
            fontColor={'#667A6E'}
            img={finalfantasy7}
            author={'Bob the Fisher'}
            likes={'5'}
            cardTextWidth={'250px'}
            date={ArticalDate}
            imageWidth={'200px'}
            articalPage={false}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          
        >
          <Card
            title='final fantasy'
            backgroundColor='white'
            fontColor='#667A6E'
            img={finalfantasy7}
            author='Bob the Fisher'
            likes='5'
            cardTextWidth={'250px'}
            date={ArticalDate}
            imageWidth={'200px'}
            articalPage={false}
          />
        </Grid>
        <SubTitlesComponent
          subtitle='Latest Articals'
          fontColor='#2F4C69'
        />
      </AlignGrid>
      <LatestArticalsComponent
        marginWidth={marginWidth}
      />
      <AlignGrid
        container
      >
        <SubTitlesComponent
          subtitle='Popular Articals'
          fontColor='#2F4C69'
        />
      </AlignGrid>
      <PopularArticalsComponent
        marginWidth={marginWidth}
      />
      
    </Grid> 
  );
}

export default HomePage;
