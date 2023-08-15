import React from 'react';
import {
    Grid,
    Divider,
  } from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import TabsComponent from '../tabsComponent/TabsComponent';
import {
  SectionComponentGridRoot,
  SectionComponentGridTabs,
} from './SectionComponentStyles';

const SectionsComponent: React.FC<Props> = ({
  headerTitle,
  sectionTabData,
}) => {
  return (
    <Grid
      container
      sx={SectionComponentGridRoot}
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
      </Grid>
      <Grid
       item
       xs={12}
       sm={12}
       md={12}
       lg={12}
       xl={12}
       sx={SectionComponentGridTabs}
      >
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={sectionTabData}
        />
      </Grid>
    </Grid>
    );
  }

export type Props = {
  headerTitle?: string,
  sectionTabData?: any,
};
  
export default SectionsComponent;
  