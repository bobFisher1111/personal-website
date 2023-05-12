import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  Divider,
} from "@mui/material";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import SubTitlesComponent from "../../components/subTitlesComponent/SubTitlesComponent";
import SectionCard from "../../components/sectionsCard/SectionCard";
import AlignGrid from "../../themes/StyledGrids";
import ArticalTabs from '../../components/articalTabs/ArticalTabs';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import goldenboy2 from '../../assets/images/goldenboy2.png';
import codingpicture from '../../assets/images/codingpicture.png';
import megalgearsolid1 from '../../assets/images/megalgearsolid1.jpg';
import legendOfZelda from '../../assets/images/legendOfZelda.jpg';
import suzuka from '../../assets/images/suzuka.jpeg';

const HomePageComponent: React.FC<Props> = ({
}) => {
  const widthRef = useRef<any>();
  const [marginWidth, setMarginWidth] = useState<any>(widthRef);
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
        backgroundColor='white'
        fontColor='#2F4C69'
        lineHeight={'40px'}
        fontSize={'32px'}
        authorAvatar={false}
        headerTopPadding={true}
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
              padding: '16px 0px px 0px',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px'
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={codingpicture}
            section='Coding'
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px'
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={legendOfZelda}
            section='Video Games'
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px'
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={goldenboy2}
            section='Shows / Movies'
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px'
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={suzuka}
            section='Hobbies'
          />
        </Grid>
        <ArticalTabs
          turOnAuthorForArtical={false}
        />
      </AlignGrid>
    </Grid> 
  );
}

export type Props = {
};

export default HomePageComponent;
