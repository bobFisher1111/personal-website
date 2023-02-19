import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  Divider,
} from "@mui/material";
import SectionPage from "../../components/sectionComponent/SectionComponent";
import FilteringComponent from "../../components/filteringComponent/FilteringComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import SubTitlesComponent from "../../components/subTitlesComponent/SubTitlesComponent";
import LatestArticalsComponent from "../../components/latestArticalComponent/LatestArticalsComponent";
import PopularArticalsComponent from "../../components/popularArticalsComponent/PopularArticalsComponent";

const HomePage = () => {
  const widthRef = useRef<any>();
  const [marginWidth, setMarginWidth] = useState<any>(widthRef);

  useEffect(() => {
    if (widthRef && widthRef.current) {
      setMarginWidth(widthRef.current.offsetLeft);
      window.addEventListener("resize", () => {
        setMarginWidth(widthRef.current?.offsetLeft);
      });
    }
    return () => {
      if(widthRef && widthRef.current) {
        window.removeEventListener("resize", () => {});
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
        backgroundColor='#282c34'
      />
      <Grid
        ref={widthRef}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: '32px 16px 0px 16px',
          maxWidth: "1024px",
          margin: 'auto',
        }}
      >
        <SectionPage />
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
        <FilteringComponent />
        <SubTitlesComponent
          subtitle='Latest Articals'
          fontColor='#2F4C69'
        />
      </Grid>
      <LatestArticalsComponent
        marginWidth={marginWidth}
      />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: '32px 16px 0px 16px',
          maxWidth: "1024px",
          margin: 'auto',
        }}
      >
      <SubTitlesComponent
        subtitle='Popular Articals '
        fontColor='#2F4C69'
      />
    </Grid>
      <PopularArticalsComponent
        marginWidth={marginWidth}
      />
    </Grid> 
  );
}

export default HomePage;
