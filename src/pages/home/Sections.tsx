import { Box, Container, Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import {
  navContainerStyles,
  sectionsContainerStyles,
  tabsStyles,
  tabStyles,
} from './SectionsStyles';

interface Props {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SECTION_NAMES: ReadonlyArray<string> = [
  "All",
  "Reviews",
  "RPGs",
  "Action",
  "Fighting",
  "Platformers",
];

export default function Sections({ activeSection, onSectionChange }: Props) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const isDarkTheme = useSelector(
    (state: { theme: { darkTheme: boolean } }) => state.theme.darkTheme
  );
  const theme = useTheme();

  return (
    <Box component="nav" sx={navContainerStyles(theme, isDarkTheme)}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={sectionsContainerStyles}
      >
        <Tabs
          value={activeSection}
          onChange={(_, newValue) => {
            if (typeof newValue === 'string') onSectionChange(newValue);
          }}
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
