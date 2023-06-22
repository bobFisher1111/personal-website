import React, { useRef, useEffect, useState } from 'react';
import {
    Grid,
    Divider,
  } from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import TabsComponent from '../tabsComponent/TabsComponent';

const SectionsComponent: React.FC<Props> = ({
  backgroundColor,
  fontColor,
  headerTitle,
  sectionTabData,
}) => {

  return (
    <Grid
      container
      sx={{
        background: '#fff',
        // minHeight: '100vh',
        display: 'flex',
        maxWidth: "1024px",
        margin: 'auto',
        padding: '40px 16px 100px 16px',
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
        <TabsComponent
          turnOnSectionTabsPadding={true}
          tabsData={sectionTabData}
        />
      </Grid>
    </Grid>
    );
  }

export type Props = {
  backgroundColor: string,
  fontColor: string,
  headerTitle?: string,
  sectionTabData?: any,
};
  
export default SectionsComponent;
  