import React, { useId, useState, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
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
};

const TabsComponent: React.FC<Props> = ({
  turnonsectiontabspadding,
  tabsData,
}) => {
  const [value, setValue] = useState(0);
  const id = useId();
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      color="primary"
      sx={TabsChangeStyle}
    >
      <Grid
        container 
        justifyContent='center'
        sx={GridTabsComponent(turnonsectiontabspadding)}
      >
        <Tabs
          color="primary"
          value={value}
          onChange={handleChange} 
          aria-label="basic tabs example"
          textColor="inherit"
        >
          {tabsData?.map((item: any, index: number) => (
            <Tab
              color="primary"
              key={`${id}-${index}`}
              onClick={() => setValue(index)}
              label={item.name}
              {...tabProps(index)} 
              sx={TabComponentTextStyles(theme)}
            />
          ))} 
        </Tabs>
      </Grid>
      {tabsData?.map((item: any, index: number) => (
        <TabPanel
          key={`${item}-${index}`}
          value={value}
          index={index}
        >
          {tabsData[index].data}
        </TabPanel>
      ))}
    </Box>
  );
};

export type Props = {
  turnonsectiontabspadding: boolean;
  tabsData?: any;
};

export default TabsComponent;
