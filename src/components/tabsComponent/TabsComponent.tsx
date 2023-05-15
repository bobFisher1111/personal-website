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

const tabProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsComponent: React.FC<Props> = ({
  turnOnSectionTabsPadding,
  extraTabs,
  position1,
  position2,
  position3,
  position4,
  position1Name,
  position2Name,
  position3Name,
  position4Name,
}) => {
  const [value, setValue] = useState(0);

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
      }}
    >
      <Grid 
        container 
        justifyContent={extraTabs ? "flex-start" : "center"}
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
          <Tab 
            label={position1Name}
            sx={{
              textTransform: 'initial',
              fontSize: '18px',
            }}
            {...tabProps(0)} 
          />
          <Tab
            label={position2Name}
            sx={{
              textTransform: 'initial',
              fontSize: '18px',
            }}
            {...tabProps(1)}
          />
          <Tab 
            label={position3Name}
            sx={{
              textTransform: 'initial',
              fontSize: '18px',
            }}
            {...tabProps(2)} 
          />
          {extraTabs &&
            <Tab 
              label={position4Name}
              sx={{
                textTransform: 'initial',
                fontSize: '18px',
              }}
              {...tabProps(3)}
            />
          }
        </Tabs>
      </Grid>
      <TabPanel value={value} index={0}>
        {position1()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {position2()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {position3()}
      </TabPanel>
      {extraTabs &&
        <TabPanel value={value} index={3}>
          {position4()}
        </TabPanel>
      }
    </Box>
  );
}

export type Props = {
  turnOnSectionTabsPadding: boolean;
  extraTabs?: boolean;
  position1: Function;
  position2: Function;
  position3: Function;
  position4?: any;
  position1Name: string;
  position2Name: string;
  position3Name: string;
  position4Name?: any;
};

export default TabsComponent;
