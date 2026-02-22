import { useState } from "react";
import { Box, Container, Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import {
  navContainerStyles,
  tabsStyles,
  tabStyles,
} from './SectionsStyles';

interface SectionData {
  [key: string]: unknown;
  section: string;
}

interface SeriesData {
  [key: string]: unknown;
  section: string;
}

interface Props {
  data: SectionData[];
  series: SeriesData[];
  setData?: (data: SectionData[]) => void;
  setSeries?: (series: SeriesData[]) => void;
}

const SECTION_NAMES = [
  "All",
  "Reviews",
  "JRPG",
  "RPGs",
  "Retro RPG",
] as const;

const filterDataBySection = (
  data: SectionData[],
  series: SeriesData[],
  section: string
): { filteredData: SectionData[]; filteredSeries: SeriesData[] } => {
  const filteredData = data?.filter((item) => item.section === section) || [];
  const filteredSeries = series?.filter((item) => item.section === section) || [];
  return { filteredData, filteredSeries };
};

export default function Sections2({ data, series, setData, setSeries }: Props) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const isDarkTheme = useSelector((state: any) => state.theme.darkTheme);
  const [activeSection, setActiveSection] = useState<string>(SECTION_NAMES[0]);
  const theme = useTheme();

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const { filteredData, filteredSeries } = filterDataBySection(data, series, section);
    setSeries?.(filteredSeries);
    setData?.(filteredData);
  };

  return (
    <Box component="nav" sx={navContainerStyles(theme, isDarkTheme)}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <Tabs
          value={activeSection}
          onChange={(_, newValue) => handleSectionChange(newValue)}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={isMobile ? 'auto' : false}
          aria-label="Content sections"
          sx={tabsStyles(isDarkTheme)}
        >
          {SECTION_NAMES.map((section) => (
            <Tab
              key={section}
              value={section}
              label={section}
              sx={tabStyles(theme, activeSection, section, isDarkTheme)}
              disableRipple
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
}
