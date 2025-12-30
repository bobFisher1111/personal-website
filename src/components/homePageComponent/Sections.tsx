import { useState } from "react";
import { Box, Button, Container, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import {
  navContainerStyles,
  mobileScrollBoxStyles,
  mobileButtonStyles,
  desktopScrollBoxStyles,
  desktopButtonStyles,
  getColorVariables,
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
  setData: (data: SectionData[]) => void;
  setSeries: (series: SeriesData[]) => void;
}

const SECTION_NAMES = [
  "Reviews",
  "Retro RPGs",
  "Modern RPGs",
  "Indie RPGs",
  "Guides & Builds",
  "Lore & Worldbuilding",
  "News",
  "Community",
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
  const { textColor, borderColor, hoverBg, hoverText } = getColorVariables(isDarkTheme);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const { filteredData, filteredSeries } = filterDataBySection(data, series, section);
    setSeries(filteredSeries);
    setData(filteredData);
  };

  const SectionButton = ({ section, isMobileView }: { section: string; isMobileView: boolean }) => (
    <Button
      key={section}
      onClick={() => handleSectionChange(section)}
      sx={
        isMobileView
          ? mobileButtonStyles(activeSection, section, isDarkTheme, borderColor, hoverBg, hoverText, textColor)
          : desktopButtonStyles(activeSection, section, isDarkTheme)
      }
    >
      {section}
    </Button>
  );

  return (
    <Box component="nav" sx={navContainerStyles(isDarkTheme)}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          px: isMobile ? 1 : 2,
        }}
      >
        {isMobile ? (
          <Box sx={mobileScrollBoxStyles}>
            {SECTION_NAMES.map((section) => (
              <SectionButton key={section} section={section} isMobileView={true} />
            ))}
          </Box>
        ) : (
          <Box sx={desktopScrollBoxStyles(isDarkTheme)}>
            {SECTION_NAMES.map((section) => (
              <SectionButton key={section} section={section} isMobileView={false} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
