import React, { useId, useState, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { useTheme, Box, Grid, Tab, Tabs } from '@mui/material';
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

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={TabPanelStyle}>{children}</Box>}
  </div>
);

const TabsComponent: React.FC<Props> = ({
  turnonsectiontabspadding,
  tabsData,
}) => {
  const [value, setValue] = useState(0);
  const id = useId();
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const theme = useTheme();

  const tabProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={TabsChangeStyle(theme)}>
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
          {tabsData?.map((item: any, index: number) => (
            <Tab
              key={`${id}-${index}`}
              label={item.name}
              {...tabProps(index)}
              sx={TabComponentTextStyles(theme, darkTheme)}
            />
          ))}
        </Tabs>
      </Grid>
      {tabsData?.map((item: any, index: number) => (
        <TabPanel key={`${id}-panel-${index}`} value={value} index={index}>
          {item.data}
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
