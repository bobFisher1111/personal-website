import React, { useState, SyntheticEvent } from 'react';
import {
  Box,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import {
  GridTabsComponent,
  TabComponentTextStyles,
  TabPanelStyle,
  TabsChangeStyle,
} from './TabsComponentStyles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={TabPanelStyle}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const TabsComponent: React.FC<Props> = ({
  turnonsectiontabspadding,
  tabsData,
}) => {
  const [value, setValue] = useState(0);
  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={TabsChangeStyle}
    >
      <Grid
        container 
        justifyContent={"center"}
        sx={GridTabsComponent(turnonsectiontabspadding)}
      >
        <Tabs
          value={value}
          onChange={handleChange} 
          aria-label="basic tabs example"
          textColor="inherit"
        >
          {tabsData?.map((item: any, index: any) => (
            <Tab
              onClick={() => setValue(index)}
              label={item.name}
              {...tabProps(index)} 
              sx={TabComponentTextStyles}
            />
          ))} 
        </Tabs>
      </Grid>
      {tabsData?.map((item: any, index: number) => (
        <TabPanel 
          value={value}
          index={index}
        >
          {tabsData[index].data}
        </TabPanel>
      ))}
    </Box>
  );
}

export type Props = {
  turnonsectiontabspadding: boolean;
  tabsData?: any;
};

export default TabsComponent;
