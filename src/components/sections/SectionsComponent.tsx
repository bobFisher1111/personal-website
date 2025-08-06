import React from 'react';
import Grid from '@mui/material/Grid';
import HeaderComponent from '../headerComponent/HeaderComponent';
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
        size={12}
      >
        <HeaderComponent
          title={headerTitle}
          authorAvatar={false}
        />
      </Grid>
      <Grid
        size={12}
        sx={SectionComponentGridTabs}
      >
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={sectionTabData}
        />
      </Grid>
    </Grid>
  );
};

export type Props = {
  headerTitle?: string,
  sectionTabData?: any,
};
  
export default SectionsComponent;
  