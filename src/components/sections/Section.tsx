import React, { useRef, useEffect, useState } from 'react';
import {
    Typography,
    Grid,
    Box,
    Divider,
    styled,
  } from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import FilteringComponent from "../../components/filteringComponent/FilteringComponent";
import SubTitlesComponent from "../../components/subTitlesComponent/SubTitlesComponent";
import AlignGrid from "../../themes/StyledGrids";
import LatestArticalCardWide from "../../components/cards/additionalCards/LatestArticalCardWide"
import Card from "./Card";
import foxGirl from '../../assets/images/foxGirl.png';
import yinYangFox from '../../assets/images/yinYangFox.jpeg';
import TabsComponent from '../../components/tabsComponent/TabsComponent';
import SectionTabComponent from '../../components/sectionsTab/SectionTabComponent';
import ArticalTabs from '../../components/articalTabs/ArticalTabs';

  
const Section: React.FC<Props> = ({
  title,
  backgroundColor,
  fontColor,
  img,
  headerTitle,
  category,
  categoryColor,
  cardTextWidth,
  date,
}) => {
  const [widthClientRef, setWidthClientRef] = useState<number>(1024);
  const widthRef = useRef<any>();
  const temptitle = 'Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review  VII Review FinalFantasyiiii VII Review  VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review  VII Review Final Fantasyiiii VII Review  VII Review Final Fantasy VII Review';
  useEffect(() => {
    const widthRefCurrent = widthRef.current;
    const clientWidthRef = widthRefCurrent?.clientWidth;
    if(widthRef.current) {
      setWidthClientRef(clientWidthRef);
    }
  }, [widthRef]);

  return (
    <Grid
      container
      ref={widthRef}
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        paddingBottom: '200px',
        maxWidth: "1024px",
        margin: 'auto',
        padding: '16px 16px 100px 16px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <HeaderComponent
          title={headerTitle}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          lineHeight={'40px'}
          fontSize={'32px'}
          authorAvatar={false}
          headerTopPadding={true}
        />
        <Divider
          sx={{
            borderColor: '#282c34',
            padding: '0px 0px 16px 0px',
          }}
        />
      </Grid>
      <Grid
       item
       xs={12}
       sm={12}
       md={12}
       lg={12}
       xl={12}
       sx={{
        padding: '16px 0px 16px 0px',
       }}
      >
        <ArticalTabs
          turOnAuthorForArtical={false}
        />
      </Grid>
    </Grid>
    );
  }

export type Props = {
  title: string,
  backgroundColor: string,
  fontColor: string,
  img: string,
  headerTitle?: string,
  category: string,
  categoryColor: string,
  cardTextWidth: string,
  date: string,
};
  
export default Section;
  