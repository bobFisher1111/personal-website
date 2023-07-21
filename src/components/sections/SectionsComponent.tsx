import React from 'react';
import {
    Grid,
    Divider,
  } from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import TabsComponent from '../tabsComponent/TabsComponent';
import { GridTopAndBottom } from '../../styles/GridStyles';

const SectionsComponent: React.FC<Props> = ({
  headerTitle,
  sectionTabData,
}) => {

  return (
    <Grid
      container
      sx={{
        background: '#fff',
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
          authorAvatar={false}
        />
        <Divider
          sx={{
            borderColor: '#282c34',
            padding: '0px 0px 16px 0px',
          }}
        />
      </Grid>
      <GridTopAndBottom
       item
       xs={12}
       sm={12}
       md={12}
       lg={12}
       xl={12}
      >
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={sectionTabData}
        />
      </GridTopAndBottom>
    </Grid>
    );
  }

export type Props = {
  headerTitle?: string,
  sectionTabData?: any,
};
  
export default SectionsComponent;
  