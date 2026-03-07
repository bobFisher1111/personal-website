import React, { useId, useState, SyntheticEvent } from "react";
import { useAppSelector } from "src/store/redux/hooks";
import { useTheme, Box, Grid, Tab, Tabs } from "@mui/material";
import {
  GridTabsComponent,
  TabComponentTextStyles,
  TabPanelStyle,
  TabsChangeStyle,
} from "./TabsComponentStyles";

interface TabPanelProps {
  children?: React.ReactNode;
  idBase: string;
  index: number;
  value: number;
}

export type TabsDataItem = {
  name: string;
  data: React.ReactNode;
};

const TabPanel = ({ children, value, index, idBase, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`${idBase}-tabpanel-${index}`}
    aria-labelledby={`${idBase}-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={TabPanelStyle}>{children}</Box>}
  </div>
);

const TabsComponent = ({ turnonsectiontabspadding, tabsData }: Props) => {
  const [value, setValue] = useState(0);
  const id = useId();
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const theme = useTheme();

  const tabProps = (index: number) => ({
    id: `${id}-tab-${index}`,
    "aria-controls": `${id}-tabpanel-${index}`,
  });

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={TabsChangeStyle(theme, darkTheme)}>
      <Grid
        container
        justifyContent="center"
        sx={GridTabsComponent(theme, turnonsectiontabspadding)}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="section tabs"
          textColor="inherit"
        >
          {tabsData?.map((item, index) => (
            <Tab
              key={`${id}-${index}`}
              label={item.name}
              {...tabProps(index)}
              sx={TabComponentTextStyles(theme, darkTheme)}
            />
          ))}
        </Tabs>
      </Grid>
      {tabsData?.map((item, index) => (
        <TabPanel
          key={`${id}-panel-${index}`}
          idBase={id}
          value={value}
          index={index}
        >
          {item.data}
        </TabPanel>
      ))}
    </Box>
  );
};

export type Props = {
  turnonsectiontabspadding: boolean;
  tabsData: readonly TabsDataItem[];
};

export default TabsComponent;
