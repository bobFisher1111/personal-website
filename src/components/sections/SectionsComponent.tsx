import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';
import HeaderComponent from 'src/components/headerComponent/HeaderComponent';
import TabsComponent from 'src/components/tabsComponent/TabsComponent';
import {
  SectionComponentGridRoot,
  SectionComponentGridTabs,
} from './SectionComponentStyles';

const SectionsComponent = ({
  headerTitle,
  sectionTabData,
}: Props) => {
  const theme = useTheme();

  return (
    <Grid container sx={SectionComponentGridRoot(theme)}>
      <Grid size={{ xs: 12 }}>
        <HeaderComponent
          title={headerTitle}
          authorAvatar={false}
        />
      </Grid>
      <Grid size={{ xs: 12 }} sx={SectionComponentGridTabs(theme)}>
        <TabsComponent
          turnonsectiontabspadding={true}
          tabsData={sectionTabData}
        />
      </Grid>
    </Grid>
  );
};

export type Props = {
  headerTitle?: string;
  sectionTabData?: any;
};

export default SectionsComponent;
