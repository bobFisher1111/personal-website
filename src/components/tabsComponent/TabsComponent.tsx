import React, { useState, SyntheticEvent } from 'react';
import {
  Tabs,
  Box,
  Tab,
  Grid,
} from "@mui/material";

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
        <Box sx={{ p: 3}}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TabsComponent: React.FC<Props> = ({
  turnOnSectionTabsPadding,
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
      sx={{
        width: '100%',
        '& .MuiBox-root': {
          padding: '0px 0px 0px 0px',
        },
        '& .MuiTabs-flexContainer': {
          padding: '0px 0px 0px 8px',
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#667A6E',
          border: '1px',
        },
        "& button[aria-selected='true']": {
          borderBottom: "3px solid #667A6E"
        },
      }}
    >
      <Grid 
        container 
        justifyContent={"center"}
        sx={{
          padding: turnOnSectionTabsPadding ? '16px 0px 16px 0px' : '0px 0px 16px 0px',
        }}
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
              sx={{
                textTransform: 'initial',
                fontSize: '18px',
              }}
              {...tabProps(index)} 
            />
          ))} 
        </Tabs>
      </Grid>
      {tabsData?.map((item: any, index: number) => (
        <TabPanel value={value} index={index}>
          {tabsData[index].data}
        </TabPanel>
      ))}
    </Box>
  );
}

export type Props = {
  turnOnSectionTabsPadding: boolean;
  tabsData?: any;
};

export default TabsComponent;
