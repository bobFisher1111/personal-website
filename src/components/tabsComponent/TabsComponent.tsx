import React, { useState, SyntheticEvent } from 'react';
import {
  Tab,
  Tabs,
} from "@mui/material";
import { BoxTabPanel, BoxTabsChange } from '../../styles/BoxStyles';
import { GridTabsComponent } from '../../styles/GridStyles';
import { TabComponentTextStyles } from './TabsComponentStyles';

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
        <BoxTabPanel>
          {children}
        </BoxTabPanel>
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
    <BoxTabsChange>
      <GridTabsComponent
        turnonsectiontabspadding={turnonsectiontabspadding.toString()}
        container 
        justifyContent={"center"}
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
      </GridTabsComponent>
      {tabsData?.map((item: any, index: number) => (
        <TabPanel 
          value={value}
          index={index}
        >
          {tabsData[index].data}
        </TabPanel>
      ))}
    </BoxTabsChange>
  );
}

export type Props = {
  turnonsectiontabspadding: boolean;
  tabsData?: any;
};

export default TabsComponent;
